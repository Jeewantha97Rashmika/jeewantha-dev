import React, { useState, useEffect, useRef } from "react";

const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789落霞与孤鹜齐飞秋水共长天一色";
const EMOJIS = [
  "\\(o_o)/",
  "(˚Δ˚)b",
  "(^-^*)",
  "(╯‵□′)╯",
  "\\(°ˊДˋ°)/",
  "╰(‵□′)╯",
];

const terminalData = [
  { id: 1, type: "folder", title: "Documents", children: [] },
  { id: 2, type: "folder", title: "Downloads", children: [] },
  {
    id: 3,
    type: "file",
    title: "README.txt",
    content: "This is a sample file content.",
  },
];

const getEmoji = () => EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

const HowDare = ({ setRMRF }) => {
  const FONT_SIZE = 12;
  const [emoji, setEmoji] = useState("");
  const [drops, setDrops] = useState([]);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    canvas.height = container.offsetHeight;
    canvas.width = container.offsetWidth;

    const columns = Math.floor(canvas.width / FONT_SIZE);
    setDrops(Array(columns).fill(1));
    setEmoji(getEmoji());
  }, []);

  const rain = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#2e9244";
    ctx.font = `${FONT_SIZE}px Arial`;

    drops.forEach((y, x) => {
      const text = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
      ctx.fillText(text, x * FONT_SIZE, y * FONT_SIZE);
    });

    setDrops(
      drops.map((y) =>
        y * FONT_SIZE > canvas.height && Math.random() > 0.975 ? 1 : y + 1
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(rain, 33);
    return () => clearInterval(interval);
  }, [drops]);

  return (
    <div
    id={`terminal-input-${this.curInputTimes}`}
      ref={containerRef}
      onClick={() => setRMRF(false)}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        transition: "background-color 0.5s ease, color 0.5s ease",

        color: "white",
        overflow: "hidden",
      }}
    >
      <canvas ref={canvasRef} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "2em" }}>{emoji}</div>
        <div style={{ fontSize: "1.5em" }}>HOW DARE YOU!</div>
        <div>Click to go back</div>
      </div>
    </div>
  );
};

class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      rmrf: false,
    };
    this.history = [];
    this.curHistory = 0;
    this.curInputTimes = 0;
    this.curDirPath = [];
    this.curChildren = terminalData;
    this.commands = {
      cd: this.cd,
      ls: this.ls,
      cat: this.cat,
      clear: this.clear,
      help: this.help,
    };
  }

  reset = () => {
    this.setState({ content: [] });
  };

  addRow = (row) => {
    this.setState((prevState) => ({
      content: [...prevState.content, row],
    }));
  };

  getCurDirName = () => {
    return this.curDirPath.length === 0
      ? "~"
      : this.curDirPath[this.curDirPath.length - 1];
  };

  getCurChildren = () => {
    let children = terminalData;
    for (const name of this.curDirPath) {
      const folder = children.find(
        (item) => item.type === "folder" && item.title === name
      );
      children = folder?.children || [];
    }
    return children;
  };

  cd = (args) => {
    if (!args || args === "~") {
      this.curDirPath = [];
      this.curChildren = terminalData;
    } else if (args === "..") {
      if (this.curDirPath.length > 0) this.curDirPath.pop();
      this.curChildren = this.getCurChildren();
    } else {
      const folder = this.curChildren.find(
        (item) => item.type === "folder" && item.title === args
      );
      if (!folder) {
        this.generateResultRow(`cd: no such file or directory: ${args}`);
      } else {
        this.curDirPath.push(folder.title);
        this.curChildren = folder.children;
      }
    }
  };

  ls = () => {
    const result = this.curChildren.map((item, index) => (
      <span
        key={`ls-${index}`}
        style={{
          color: item.type === "file" ? "white" : "purple",
          marginRight: "10px",
        }}
      >
        {item.title}
      </span>
    ));
    this.generateResultRow(<div>{result}</div>);
  };

  cat = (args) => {
    const file = this.curChildren.find(
      (item) => item.type === "file" && item.title === args
    );
    if (!file) {
      this.generateResultRow(`cat: ${args}: No such file or directory`);
    } else {
      this.generateResultRow(file.content);
    }
  };

  clear = () => {
    this.reset();
  };

  help = () => {
    const helpContent = (
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li>
          cat {"<file>"} - View the content of {"<file>"}
        </li>
        <li>
          cd {"<dir>"} - Change to directory {"<dir>"}
        </li>
        <li>ls - List files and directories</li>
        <li>clear - Clear the terminal</li>
        <li>help - Show this help message</li>
        <li>rm -rf / - :)</li>
      </ul>
    );
    this.generateResultRow(helpContent);
  };

  keyPress = (e) => {
    const keyCode = e.key;
    const inputElement = document.getElementById(
      `terminal-input-${this.curInputTimes}`
    );
    const inputText = inputElement.value.trim();

    if (keyCode === "Enter") {
      const [cmd, arg] = inputText.split(" ");
      this.history.push(inputText);
      if (inputText.startsWith("rm -rf")) {
        this.setState({ rmrf: true });
      } else if (cmd in this.commands) {
        this.commands[cmd](arg);
      } else {
        this.generateResultRow(`zsh: command not found: ${cmd}`);
      }
      inputElement.setAttribute("readonly", "true");
      this.curHistory = this.history.length;
      this.curInputTimes += 1;
      this.generateInputRow();
    } else if (keyCode === "ArrowUp") {
      if (this.history.length > 0 && this.curHistory > 0) {
        this.curHistory -= 1;
        inputElement.value = this.history[this.curHistory];
      }
    } else if (keyCode === "ArrowDown") {
      if (this.history.length > 0 && this.curHistory < this.history.length) {
        this.curHistory += 1;
        inputElement.value =
          this.curHistory === this.history.length
            ? ""
            : this.history[this.curHistory];
      }
    }
  };

  generateInputRow = () => {
    const inputRow = (
      <div
        key={this.curInputTimes}
        style={{ display: "flex", alignItems: "center" }}
      >
        <span style={{ color: "yellow" }}>
          Jeewantha rashmika:{this.getCurDirName()}$&nbsp;
        </span>
        <input
          id={`terminal-input-${this.curInputTimes}`}
          style={{
            flex: 1,
            color: "white",
            background: "transparent",
            border: "none",
            outline: "none",
          }}
          autoFocus
          onKeyDown={this.keyPress}
        />
      </div>
    );
    this.addRow(inputRow);
  };

  generateResultRow = (result) => {
    this.addRow(<div key={`result-${this.curInputTimes}`}>{result}</div>);
  };

  componentDidMount() {
    this.generateInputRow();
  }

  render() {
    return (
      <div
        style={{
          background: "black",
          color: "white",
          padding: "10px",
          height: "50vh",
          overflowY: "scroll",
        }}
        onClick={() =>
          document
            .getElementById(`terminal-input-${this.curInputTimes}`)
            .focus()
        }
      >
        {this.state.rmrf && (
          <HowDare setRMRF={(value) => this.setState({ rmrf: value })} />
        )}
        {this.state.content}
      </div>
    );
  }
}

export default Terminal;
