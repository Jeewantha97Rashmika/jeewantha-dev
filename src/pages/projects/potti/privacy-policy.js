import React from 'react';
import Header from '../../../layouts/Header';
import ScrollToTop from 'react-scroll-to-top';
import '../../../global.css';
import Footer from '../../../layouts/Footer';
import { Box, Container, Typography, useTheme } from '@mui/material';
import ThemeLayout from '../../../Theme/ThemeLayout';
import SeoSection from '../../../components/shoezone/SeoSection';
import useThemeMode from '../../../customHooks/useThemeMode';
import AppIcon from '../../../images/potii-images/app-icon-light.png';

const sections = [
  {
    title: 'Overview',
    paragraphs: [
      'Potti respects your privacy. This Privacy Policy explains how information is handled when you use the Potti mobile application.',
      'Potti is a personal savings and goal-tracking application designed to help users create savings goals, track progress, build saving habits, maintain streaks, and unlock achievements.',
      'By using Potti, you acknowledge the practices described in this Privacy Policy.',
    ],
  },
  {
    title: 'Information Potti Processes',
    paragraphs: [
      'Potti is designed with privacy in mind. Depending on the features you use, Potti may process information such as:',
    ],
    list: [
      'Your display name',
      'Selected avatar',
      'Preferred currency',
      'Savings goal names',
      'Target saving amounts',
      'Saving durations',
      'Amounts you mark as saved',
      'Saving progress',
      'Saving streaks',
      'Achievements and badges',
      'App preferences and reminder settings',
    ],
    after:
      "This information is used to provide Potti's savings tracking and personalization features.",
  },
  {
    title: 'No Banking or Payment Information',
    paragraphs: [
      'Potti is a savings planning and tracking tool. Potti does not provide banking services and does not itself transfer or hold money. Unless a future version explicitly introduces such functionality, Potti does not request or store:',
    ],
    list: [
      'Bank account credentials',
      'Credit or debit card numbers',
      'Online banking passwords',
      'PIN numbers',
      'Actual banking transaction data',
    ],
    after:
      'Amounts entered into Potti represent savings records or goals created by the user.',
  },
  {
    title: 'Local Storage',
    paragraphs: [
      'Potti may store your savings information locally on your device so that the app can function and remember your progress.',
      'Locally stored information may include your savings pots, goals, progress, streaks, achievements, preferences, avatar selection, and other app settings.',
      "If your version of Potti operates entirely using local storage, this information is not automatically uploaded to Potti's servers.",
      'Deleting Potti or clearing its application data may permanently remove locally stored information unless a backup or synchronization feature is provided.',
    ],
  },
  {
    title: 'Notifications and Reminders',
    paragraphs: [
      'Potti may allow you to enable reminders and notifications to help you maintain your saving routine.',
      'If notifications are enabled, the app may use notification permissions and your selected reminder time to deliver reminders.',
      "You can disable notifications at any time through Potti's settings or your device's system settings.",
    ],
  },
  {
    title: 'How We Use Information',
    paragraphs: ['Information processed by Potti may be used to:'],
    list: [
      'Create and manage your savings goals',
      'Calculate and display saving progress',
      'Generate your saving plan',
      'Maintain saving streaks',
      'Display achievements and badges',
      'Personalize your experience',
      'Remember app settings and preferences',
      'Send reminders you have enabled',
      'Maintain and improve app functionality',
      'Diagnose technical problems, if diagnostic functionality is enabled',
    ],
    after:
      'We do not use your savings information to make lending, credit, investment, or other financial eligibility decisions.',
  },
  {
    title: 'Sharing of Information',
    paragraphs: [
      'We do not sell your personal information.',
      'If the current version of Potti operates entirely offline and does not use third-party analytics, advertising, cloud storage, or tracking services, information stored locally by Potti is not shared with third parties by us.',
      'If third-party services are introduced in future versions (for example, crash reporting, analytics, cloud synchronization, authentication, or other infrastructure), we will update this Privacy Policy and applicable App Store and Google Play privacy disclosures accordingly.',
      'Any third-party provider that processes user data on our behalf will be expected to provide appropriate protection for that information.',
    ],
  },
  {
    title: 'Advertising and Tracking',
    paragraphs: [
      'Current version: Potti does not use your personal information for cross-app or cross-website advertising or tracking.',
      'Potti does not sell user information to advertisers or data brokers.',
      'If this changes in a future version, we will update this Privacy Policy and obtain any permissions required by the applicable platform and law.',
    ],
    link: {
      before:
        'For example, Apple requires permission through App Tracking Transparency when an app engages in tracking as defined by Apple. ',
      text: 'Apple Developer',
      href: 'https://developer.apple.com/app-store/user-privacy-and-data-use/',
    },
  },
  {
    title: 'Data Retention and Deletion',
    paragraphs: [
      'Information stored locally on your device remains there until:',
    ],
    list: [
      'You delete the relevant information within Potti;',
      "You clear Potti's application data;",
      'You uninstall the app; or',
      "The operating system removes the application's local data.",
    ],
    after:
      'Where Potti processes information on a server in a future version, we will retain it only for as long as reasonably necessary to provide the relevant service, satisfy legal obligations, resolve disputes, or protect the service.',
    paragraphsAfter: [
      'Because locally stored Potti information is controlled through your device, you may delete information by using available deletion/reset features in Potti or by removing the app and its local data from your device.',
      'If Potti later introduces user accounts or cloud storage, users will be provided with an appropriate way to request deletion of their account and associated personal data.',
      'You may also contact us regarding privacy or deletion questions using the contact information below.',
    ],
  },
  {
    title: 'Security',
    paragraphs: [
      'We take reasonable measures designed to protect information processed through Potti.',
      'Where information remains only on your device, its protection also depends on the security of your device and operating system.',
      'No electronic storage or transmission method can be guaranteed to be completely secure, so we cannot guarantee absolute security.',
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      'Potti is not designed to knowingly collect personal information from children in violation of applicable privacy laws.',
      'If you believe a child has provided personal information to us that should not have been collected, please contact us so that we can take appropriate action.',
    ],
  },
  {
    title: 'Device Permissions',
    paragraphs: [
      'Depending on your device and the features you enable, Potti may request permissions such as:',
    ],
    list: [
      'Notifications: used to send saving reminders and other app notifications requested by you.',
    ],
    after:
      'Potti will only request permissions that are reasonably necessary for its functionality. You can manage permissions through your iOS or Android device settings.',
  },
  {
    title: 'Third-Party Services',
    paragraphs: [
      'If Potti uses third-party SDKs or services, those services may process information according to their own privacy practices.',
      'Current third-party services: None.',
    ],
  },
  {
    title: 'International Users',
    paragraphs: [
      'Potti may be available to users in multiple countries. Where applicable, we will process personal information in accordance with applicable privacy and data-protection requirements.',
    ],
  },
  {
    title: 'Your Choices and Rights',
    paragraphs: ["Depending on Potti's available functionality, you can:"],
    list: [
      'Control notification permissions through your device',
      'Change reminder settings',
      'Edit or delete savings goals',
      'Remove locally stored app information',
      'Contact us regarding privacy questions or requests',
    ],
    after:
      'If you have provided consent for an optional data-processing feature, you may withdraw that consent where the app provides such an option or by contacting us.',
  },
  {
    title: 'Changes to This Privacy Policy',
    paragraphs: [
      "We may update this Privacy Policy when Potti's features, technologies, legal requirements, or data practices change.",
      'When we make changes, we will update the "Last Updated" date at the top of this page. Material changes may also be communicated through the app where appropriate.',
      'We encourage you to review this Privacy Policy periodically.',
    ],
  },
];

function Body({ children }) {
  const theme = useTheme();
  return (
    <Typography
      component='div'
      sx={{
        fontSize: '16px',
        lineHeight: 1.8,
        mb: 2,
        color: theme.palette.textColor?.main,
        fontFamily: 'Montserrat',
      }}
    >
      {children}
    </Typography>
  );
}

function SectionTitle({ children }) {
  const theme = useTheme();
  return (
    <Typography
      variant='h2'
      sx={{
        fontSize: { xs: '20px', md: '24px' },
        fontWeight: 600,
        mb: 1.5,
        fontFamily: 'Montserrat',
        color: theme.palette.textColor?.secondary,
      }}
    >
      {children}
    </Typography>
  );
}

const linkStyle = { color: '#FF7262' };

const PrivacyPolicy = () => {
  const { themeMode, toggleTheme } = useThemeMode();
  const theme = useTheme();

  return (
    <>
      <SeoSection
        title={'Potti Privacy Policy'}
        description={
          'Privacy Policy for Potti, a personal savings and goal-tracking mobile app by Jeewantha Rashmika.'
        }
        canonical={'projects/potti/privacy-policy/'}
      />

      <ThemeLayout themeMode={themeMode}>
        <Box
          sx={{
            backgroundColor: themeMode === 'light' ? '#f7f8fa' : '#0b0b0d',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
        >
          <Header themeMode={themeMode} toggleTheme={toggleTheme} />
          <ScrollToTop
            top={900}
            smooth
            color='#333'
            style={{ padding: '5px', zIndex: 100000 }}
          />

          <Container maxWidth='md' sx={{ py: { xs: 5, md: 8 } }}>
            <img
              src={AppIcon}
              alt='Potti app icon'
              width={88}
              style={{ borderRadius: '22%', marginBottom: '1.5rem' }}
            />
            <Typography
              variant='h1'
              sx={{
                fontSize: { xs: '30px', md: '40px' },
                fontWeight: 'bold',
                fontFamily: 'Montserrat',
                color: theme.palette.textColor?.secondary,
              }}
            >
              Potti Privacy Policy
            </Typography>
            <Typography
              sx={{
                mt: 1,
                mb: 4,
                fontFamily: 'Montserrat',
                color: theme.palette.textColor?.main,
              }}
            >
              Last Updated: October 6, 2026
            </Typography>

            {sections.map((s) => (
              <Box key={s.title} sx={{ mb: 4 }}>
                <SectionTitle>{s.title}</SectionTitle>
                {s.paragraphs.map((p) => (
                  <Body key={p}>{p}</Body>
                ))}
                {s.list && (
                  <Box component='ul' sx={{ pl: 3, mt: 0, mb: 2 }}>
                    {s.list.map((item) => (
                      <Body key={item}>
                        <li>{item}</li>
                      </Body>
                    ))}
                  </Box>
                )}
                {s.after && <Body>{s.after}</Body>}
                {s.paragraphsAfter &&
                  s.paragraphsAfter.map((p) => <Body key={p}>{p}</Body>)}
                {s.link && (
                  <Body>
                    {s.link.before}
                    <a
                      href={s.link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={linkStyle}
                    >
                      {s.link.text}
                    </a>
                  </Body>
                )}
              </Box>
            ))}

            <Box sx={{ mb: 4 }}>
              <SectionTitle>Contact Us</SectionTitle>
              <Body>
                If you have questions, concerns, or requests regarding this
                Privacy Policy or Potti's privacy practices, please contact:
              </Body>
              <Body>App: Potti</Body>
              <Body>Developer: Jeewantha Rashmika Wickramasinghe</Body>
              <Body>
                Email:{' '}
                <a href='mailto:hello@jeewantharashmika.com' style={linkStyle}>
                  hello@jeewantharashmika.com
                </a>
              </Body>
              <Body>
                Website:{' '}
                <a href='https://jeewantharashmika.com' style={linkStyle}>
                  jeewantharashmika.com
                </a>
              </Body>
            </Box>
          </Container>
          <Footer />
        </Box>
      </ThemeLayout>
    </>
  );
};

export default PrivacyPolicy;
