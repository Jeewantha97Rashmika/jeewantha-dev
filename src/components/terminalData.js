import React from "react";

const terminal = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div style={{ padding: "0.25rem 0" }}>
            <p>
              Hi, this is Xiaohan Zou. I am a PhD student at the Computer Science and
              Engineering department of Pennsylvania State University.
            </p>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Machine Learning / Computer Vision / Multimodal Learning"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm looking for a research internship for Summer 2024. I'm open to collaboration on research projects."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
            <li>
              Email:{" "}
              <a
                style={{ color: "#90caf9" }}
                href="mailto:renovamenzxh@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                renovamenzxh@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                style={{ color: "#90caf9" }}
                href="https://github.com/Renovamen"
                target="_blank"
                rel="noreferrer"
              >
                @Renovamen
              </a>
            </li>
            <li>
              <a
                style={{ color: "#90caf9" }}
                href="https://scholar.google.com/citations?user=RuW6xgMAAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                style={{ color: "#90caf9" }}
                href="https://www.linkedin.com/in/xiaohan-zou"
                target="_blank"
                rel="noreferrer"
              >
                xiaohan-zou
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                style={{ color: "#90caf9" }}
                href="https://zxh.me"
                target="_blank"
                rel="noreferrer"
              >
                https://zxh.me
              </a>
            </li>
            <li>
              知乎:{" "}
              <a
                style={{ color: "#90caf9" }}
                href="https://www.zhihu.com/people/chao-neng-gui-su"
                target="_blank"
                rel="noreferrer"
              >
                @西伯利亚大恶龙
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div style={{ padding: "0.25rem 0" }}>
        <p>
          <span style={{ color: "#fbc02d" }}>while</span>(
          <span style={{ color: "#64b5f6" }}>sleeping</span>) <span>{"{"}</span>
        </p>
        <p style={{ marginLeft: "2rem" }}>
          <span style={{ color: "#64b5f6" }}>money</span>
          <span style={{ color: "#fbc02d" }}>++</span>;
        </p>
        <p>{"}"}</p>
      </div>
    )
  }
];
