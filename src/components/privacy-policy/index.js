import React, { useState } from "react";
import { MainBox, TabDiv, TextBox, Wrapper } from "./style";
import Navbar from "../layout/navbar";

const PrivacyPolicy = () => {
  const [active, setActive] = useState(0);
  const cookiedata = [
    {
      heading: "INTRODUCTION",
      text: (
        <>
          We are Meta Experience Company LTD, company number 14150721 and whose
          registered office is at 86-90 Paul Street, London, EC2A 4NE, and these
          terms apply to both our company, website
          <br />
          <br />
          In this policy, “Company”,”We", "Us" and "Our'' refers to Intelligence
          Index Marketing Limited Our Website Visitors, Service Users and
          account holders - “Users”, “You”,”Your” and “Yours” <br />
          We use cookies on our Website. Insofar as those cookies are not
          strictly necessary for the provision of Our Website/App platform, We
          will ask you to consent to our use of cookies when You first visit our
          Website.
          <br />
          We capitalise certain words to indicate their importance, definition
          and standing.
        </>
      ),
    },
    {
      heading: "ABOUT OUR COOKIES",
      text: (
        <>
          A cookie is a file containing an identifier (a string of letters and
          numbers) that is sent by a web server to a web browser and is stored
          by the browser. The identifier is then sent back to the server each
          time the browser requests a page from the server.
          <br />
          Cookies may be either "persistent" cookies or "session" cookies: a
          persistent cookie will be stored by a web browser and will remain
          valid until its set expiry date, unless deleted by the user before the
          expiry date; a session cookie, on the other hand, will expire at the
          end of the user session, when the web browser is closed.
          <br />
          Cookies may not contain any information that personally identifies a
          user, but personal data that We store about You may be linked to the
          information stored in and obtained from cookies.
        </>
      ),
    },
    {
      heading: "COOKIES THAT WE AND OUR SERVICES PROVIDER USE",
      text: (
        <>
          We and Our service providers use cookies and those cookies may be
          stored on Your computer when You visit and or use our website.
          <br />
          We use Google Analytics. Google Analytics gathers information about
          the use of Our Website by means of cookies. The information gathered
          is used to create reports about the use of Our website. You can find
          out more about Google's use of information by visiting{" "}
          <a
            href="https://www.google.com/policies/privacy/partners/"
            target="_blank"
          >
            https://www.google.com/policies/privacy/partners/
          </a>{" "}
          and you can review Google's privacy policy at
          <a href="https://policies.google.com/privacy" target="_blank">
            {" "}
            https://policies.google.com/privacy
          </a>
          .
        </>
      ),
    },
    {
      heading: "MANAGING COOKIES",
      text: (
        <>
          Most browsers allow You to refuse to accept cookies and to delete
          cookies. The methods for doing so vary from browser to browser, and
          from version to version. You can however obtain up-to-date information
          about blocking and deleting cookies via these links:
        </>
      ),
      suboption: (
        <>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="-blank"
          >
            https://support.google.com/chrome/answer/95647
          </a>{" "}
          (Chrome);
          <br />
          <a
            href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
            target="-blank"
          >
            https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop
          </a>{" "}
          (Firefox);
          <br />
          <a
            href="https://help.opera.com/en/latest/security-and-privacy/"
            target="-blank"
          >
            https://help.opera.com/en/latest/security-and-privacy/{" "}
          </a>
          (Opera);
          <br />
          <a
            href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies "
            target="-blank"
          >
            https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies{" "}
          </a>
          (Internet Explorer);
          <br />
          <a
            href="https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
            target="-blank"
          >
            https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac
          </a>{" "}
          (Safari); and <br />
          <a
            href="  https://support.microsoft.com/en-gb/help/4468242/microsoft-edge-browsing-data-and-privacy "
            target="-blank"
          >
            https://support.microsoft.com/en-gb/help/4468242/microsoft-edge-browsing-data-and-privacy{" "}
          </a>
          (Edge).
        </>
      ),
      text2: (
        <>
          Blocking all cookies will have a negative impact upon the usability of
          many websites.
          <br />
          If You block cookies, You will not be able to use all the features or
          some services on Our website.
        </>
      ),
    },
    {
      heading: "AMENDMENTS",
      text: (
        <>
          We may update this policy from time to time by publishing a new
          version on Our Website.
          <br />
          You should check this page occasionally to ensure You are happy with
          any changes to this policy.
          <br />
          We may notify You of any significant changes to this policy by email.
        </>
      ),
    },
    {
      heading: "LEGAL INFORMATION",
      text: (
        <>
          This Cookie Policy has been prepared based upon the Data Protection
          Act 2018.
        </>
      ),
    },
    {
      heading: "OUR DETAILS",
      text: (
        <>
          This Website is owned and operated by Meta Experience Company LTD . We
          are a company registered in England and Wales under registration
          number 14150721, and Our registered office is 86-90 Paul Street,
          London, EC2A 4NE
          <br />
          You can contact Us: by email, using the email address published on Our
          Website and/or App on this document – policy@onewayx.com
        </>
      ),
    },
  ];

  const privacydata = [
    {
      text: (
        <>
          This is the Privacy Policy of Meta Experience Company LTD, a company
          registered in the United Kingdom, registered number 14150721 and whose
          registered office is at 86-90 Paul Street, London, EC2A 4NE (“MEC”,
          Company”, “we”, “us” and “ours”) <br />
          <br />
          The document provides the customer with the information on how we
          collect and use personal data, giving the reason we collect, and how
          we use and share the information. We at MEC take our responsibilities,
          in respect of our customers personal data, very seriously - “user”,
          “you”, “your” and “yours”
          <br />
          <br />
          The MEC experience is intended to be enjoyed by those over the age of
          16 years and is an immersive site in which you are full involved in
          this unique shopping experience.
        </>
      ),
    },
    {
      heading: "TABLE OF CONTENTS",
    },
  ];
  const privacy2data = [
    {
      textno: "1.1.",
      text: (
        <>
          We have set out the general categories of personal data that we
          collect. We do not collect any data from third parties.
        </>
      ),
    },
    {
      textno: "1.2.",
      text: (
        <>
          We may process data enabling us to get in contact with you ("contact
          data"). This contact data may include your name, email address,
          telephone number and postal address and . If you use our services you
          may also be provided with Login details and passwords, by us, which
          will also be collected and retained by us. The contact data is
          provided by you, if you download our App, view our website and Concept
          Store use our services it is necessary for us to carry out the
          services we provide.
        </>
      ),
    },
    {
      textno: "1.3.",
      text: (
        <>
          We may also collect your Consumer behavior data, to enable us to
          better understand your shopping needs and personal preference cues in
          the store
        </>
      ),
    },
    {
      textno: "1.4.",
      text: (
        <>
          We may process information contained in or relating to any
          communication that you send to us or that we send to you
          ("communication data"). The communication data may include the
          communication content and metadata associated with the communication.
          Our website will generate the metadata associated with communications
          made using the App contact forms.
        </>
      ),
    },
    {
      textno: "1.5.",
      text: (
        <>
          We may process data about your use of website services ("usage data").
          The usage data may include your IP address, geographical location,
          browser type and version, operating system, referral source, usage, as
          well as information about the timing, frequency and pattern of your
          service use, including what goods you look at, how long you spend in
          the website, which items you picked out, and how long you spent
          looking at those items. The source of the usage data is Google
          Analytics.
        </>
      ),
    },
    {
      textno: "1.6.",
      text: (
        <>
          If you sign up for an account with us on our website, place an order,
          or complete reviews or surveys or enter promotions or competition,
          including any on social media, or join our community on our website we
          will process this data to enable us to better provide our services to
          you.
        </>
      ),
    },
    {
      textno: "1.7",
      text: (
        <>
          Please do not supply any other person's personal data to us, the data
          you supply must only be your own. You may provide a photo of yourself
          and you may invite a friend to join us, but you must obtain their
          permission first, as we will only communicate with people who we know
          are happy to receive informative emails from us.
        </>
      ),
    },
    {
      textno: "1.8",
      text: (
        <>
          We may not retain all of the information above depending on what
          services you use and your interaction with our website, but this data
          if shared with others will be anonymised.
        </>
      ),
    },
    {
      textno: "1.9",
      text: (
        <>
          Application Data - If you use our website, we also may collect the
          following information if you choose to provide us with access or
          permission:
        </>
      ),
      textano: <>a)</>,
      texta: (
        <>
          Geolocation Information - Track Location based information from your
          mobile device, either continuously or while you are using our mobile
          application(s), to provide certain location-based services.
        </>
      ),
    },
    {
      textno: "1.10",
      text: (
        <>
          If you wish to change our access or permissions, you may do so in your
          device's settings.
        </>
      ),
    },
    {
      textno: "1.11",
      text: <>No data is collected from any person under the age of 16.</>,
    },
  ];
  const privacy3data = [
    {
      textno: "2.1",
      text: (
        <>
          Special Category Data - is information about race, religion, ethnic
          origin, political opinion, religious or philosophical beliefs, trade
          union membership, genetic data, biometric data or health data.
        </>
      ),
    },
    {
      textno: "2.2",
      text: (
        <>
          We do not knowingly collect any ‘Special Category Data” unless you
          expressly give your permission, it may be included in the information
          you provide to us in your application or through your community group
          chats.
        </>
      ),
    },
  ];
  const privacy4data = [
    {
      textno: "3.1",
      text: (
        <>
          We will take appropriate technical and organisational precautions to
          secure your personal data and to prevent the loss, misuse or
          alteration of your personal data.
        </>
      ),
    },
    {
      textno: "3.2",
      text: (
        <>
          We will store your personal data on secure servers, personal computers
          and mobile devices, and in secure manual record-keeping systems.
        </>
      ),
    },
    {
      textno: "3.3",
      text: (
        <>
          Any data relating to your enquiries and financial transactions that is
          sent from your mobile browser to our server, or from our server to
          your mobile browser, will be protected using encryption technology.
        </>
      ),
    },
    {
      textno: "3.4",
      text: (
        <>
          You acknowledge that the transmission of unencrypted or inadequately
          encrypted data over the internet is inherently insecure, and we cannot
          guarantee the security of data sent over the internet.
        </>
      ),
    },
    {
      textno: "3.5",
      text: (
        <>
          You should ensure that any password and any login details are not
          susceptible to being guessed, whether by a person or a computer
          program. You are responsible for keeping the password you use for
          accessing our website confidential and we will not ask you for your
          password (if any) except when you are logging into your account.
        </>
      ),
    },
    {
      textno: "3.6",
      text: (
        <>
          We also use the information on. How you use our virtual experience,
          for example how long you spent in the virtual store, what items you
          looked at and how long you looked at the time. This information and is
          shared with other but on an anonymised basis, you may withdraw this
          consent at any time.
        </>
      ),
    },
    {
      textno: "3.7",
      text: <>When you login:-</>,
      textano: <>a)</>,
      texta: (
        <>
          We process your information to provide, improve, and administer the
          services our App/website/virtual Store supplies to you; <br />i for
          security and fraud prevention, to communicate with you and to comply
          with law.
        </>
      ),
    },
    {
      textano: <>b)</>,
      texta: (
        <>
          We may process your information so you can create and log in to your
          account, as well as keep your account in working order and update your
          account when used;
        </>
      ),
    },
    {
      textano: <>c)</>,
      texta: (
        <>
          To ensure proper delivery of services to you and to process your
          information to provide you with the requested service;
        </>
      ),
    },
    {
      textano: <>d)</>,
      texta: (
        <>
          To respond to your inquiries and to support you whilst using our
          services;
        </>
      ),
    },
    {
      textano: <>e)</>,
      texta: (
        <>
          We may process your information to respond to account inquiries and
          solve any potential issues you might have with the requested service;
        </>
      ),
    },
    {
      textano: <>f)</>,
      texta: (
        <>To send information to you for the administration of your account;</>
      ),
    },
    {
      textano: <>g)</>,
      texta: (
        <>
          We may process your information to send you details about changes or
          updates to our services, changes to our terms and policies, and other
          such information; and
        </>
      ),
    },
    {
      textano: <>h)</>,
      texta: (
        <>
          To save or protect an individual's or company’s vital interest to
          prevent harm.
        </>
      ),
    },
  ];
  const privacy5data = [
    {
      textno: "4.1",
      text: (
        <>
          Operations - We may process your personal data for the purposes of
          operating our App/website/virtual store, the processing and fulfilment
          of services, providing additional services, generating invoices, bills
          and other payment-related documentation, and credit control. The legal
          basis for this processing is the performance of a contract between you
          and us and/or taking steps, at your request, to enter into such a
          contract.
        </>
      ),
    },
    {
      textno: "4.2",
      text: (
        <>
          Relationships and communications - We may process personal data for
          the purposes of managing our business relationships, communicating
          with you by email, our push notices providing support services and
          complaint handling. The legal basis for this processing is our
          legitimate interests, namely communications with our website users,
          partners and the maintenance of our relationships, enabling the use of
          our website and its proper administration and that of our business.
        </>
      ),
    },
    {
      textno: "4.3",
      text: (
        <>
          Personalisation - We may process account data, service data and/or
          usage data for the purposes of personalising the content that you see
          on our website and through our website services to ensure that you
          only see material that is relevant to you. The legal basis for this
          processing is the performance of a contract between you and us and/or
          taking steps, at your request, to enter into such a contract.
        </>
      ),
    },
    {
      textno: "4.4",
      text: (
        <>
          Direct marketing - We may process contact data, account data, profile
          data, customer relationship data and/or transaction data for the
          purposes of creating, targeting and sending direct marketing
          communications by email, SMS and/or push notices for marketing-related
          purposes. The legal basis for this processing is promoting our
          business and communicating marketing messages and offers to our
          website visitors, users and account holders. You may opt out of this
          service at any time by contacting us at{" "}
          <a href="policy@onewayx.com">policy@onewayx.com</a> email address.
        </>
      ),
    },
    {
      textno: "4.5",
      text: (
        <>
          Research and analysis - We may process usage data, service data and/or
          transaction data for the purposes of researching and analysing the use
          of our website and services, as well as researching and analysing
          other interactions with our business. The legal basis for this
          processing is our legitimate interests, namely monitoring, supporting,
          improving and securing our website services and business generally.
          This data is anonymised and your data cannot be identified to you.
        </>
      ),
    },
    {
      textno: "4.6",
      text: (
        <>
          Record keeping - We may process your personal data for the purposes of
          creating and maintaining our databases, back-up copies of our
          databases and our business records generally. The legal basis for this
          processing is our legitimate interests, namely ensuring that we have
          access to all the information we need to properly and efficiently run
          our business in accordance with this policy and any legal requirements
          we are obligated to.
        </>
      ),
    },
    {
      textno: "4.7",
      text: (
        <>
          Security - We may process your personal data for the purposes of
          security and the prevention of fraud and other criminal activity. The
          legal basis of this processing is our legitimate interests, namely the
          protection of our website, services and business, and the protection
          of others.
        </>
      ),
    },
    {
      textno: "4.8",
      text: (
        <>
          Insurance and risk management - We may process your personal data
          where necessary for the purposes of obtaining or maintaining insurance
          coverage, managing risks and/or obtaining professional advice. The
          legal basis for this processing is our legitimate interests, namely
          the proper protection of our business against risks.
        </>
      ),
    },
    {
      textno: "4.9",
      text: (
        <>
          Legal claims - We may process Your personal data where necessary for
          the establishment, exercise or defence of legal claims, whether in
          court proceedings or in an administrative or out-of-court procedure.
          The legal basis for this processing is our legitimate interests,
          namely the protection and assertion of our legal rights, Your legal
          rights and the legal rights of others.
        </>
      ),
    },
    {
      textno: "4.10",
      text: (
        <>
          Legal compliance and vital interests - We may also process your
          personal data where such processing is necessary for compliance with a
          legal obligation to which we are subject or in order to protect your
          vital interests or the vital interests of another natural person.
        </>
      ),
      textano: <>a)</>,
      texta: (
        <>
          if we are unable to obtain permission but believe it is in the
          interest of the individual that we collect and retain certain
          information, we will do so in the following circumstances:
        </>
      ),
    },
    {
      textano: <>i.</>,
      texta: (
        <>
          {" "}
          If collection is clearly in the interests of an individual and consent
          cannot be obtained in a timely way;
        </>
      ),
    },
    {
      textano: <>ii</>,
      texta: <>For investigations and fraud detection and prevention</>,
    },
    {
      textano: <>iii</>,
      texta: (
        <>For business transactions provided certain conditions are met;</>
      ),
    },
    {
      textano: <>iv</>,
      texta: (
        <>
          If it is contained in a witness statement and the collection is
          necessary to assess, process, or settle an insurance claim;
        </>
      ),
    },
    {
      textano: <>v</>,
      texta: (
        <>
          For identifying injured, ill, or deceased persons and communicating
          with next of kin;
        </>
      ),
    },
    {
      textano: <>vi</>,
      texta: (
        <>
          If we have reasonable grounds to believe an individual has been, is,
          or may be victim of financial abuse;
        </>
      ),
    },
    {
      textano: <>vii</>,
      texta: (
        <>
          If disclosure is required to comply with a subpoena, warrant, court
          order, or rules of the court relating to the services;
        </>
      ),
    },
    {
      textno: <>4.11</>,
      text: (
        <>
          All processing of Information is done in line with the Data Protection
          Act 2018, EU GDPR Regulations (Data Protection Directive 95/46/EC),
          COPPA (Children’s Online Privacy Protection Act) and in compliance
          with CCPA (California Consumer Privacy Act).
          <br />
          <br />
          Also see table below
        </>
      ),
    },
  ];
  const privacy6data = [
    {
      textno: "5.1",
      text: (
        <>
          Our Partners and other third-party service providers that we made need
          to share such information with to enable them to perform the services
          we require of them. We ensure that these third parties cannot use or
          supply your personal information unless we have given them permissions
          to do so. They will also not share your personal information with any
          other organisation apart from us. They also commit to protect the data
          they hold on our behalf and to retain it for the period we instruct.
          The categories of third parties we may share personal information with
          are as follows:
          <br />
          a) Marketing Programs; <br />
          b) Data Analytics Services;
          <br />
          c )Sales & Marketing Tools;
          <br />
        </>
      ),
    },
    {
      textno: "5.2",
      text: (
        <>
          We also may need to share your personal information in the following
          situations:
          <br />
          a) Business Transfers - We may share or transfer your information in
          connection with, or during negotiations of, any merger, sale of
          company assets, financing, or acquisition of all or a portion of our
          business to another company;
          <br />
          b) Partners - We may share your information with our Partners, in
          which case they are legally required to abide by this privacy notice.
          Also any Affiliates which include any parent company and any
          subsidiaries, joint venture partners, or other companies that we
          control or that are under common control with us;
          <br />
          c) Selected third-party suppliers of products and/or services
          identified for the purpose of enabling them to contact you so that
          they can offer, market and sell to you relevant products and/or
          services. Each such third-party will act as a data controller in
          relation to the personal data that we supply to it; and upon
          contacting you, each such third-party will supply to you a copy of its
          own privacy policy, which will govern that third-party’s use of your
          personal data. MEC are not responsible or liable for those Third-Party
          websites Privacy policy or their content. MEC may display a warning
          notice when you are about to client the link to these sites to remind
          you of this. You can opt out of this service at any time by contacting
          us at policy@onewayx.com;
          <br />
          d) Insurers and/or professional advisers insofar as reasonably
          necessary for the purposes of obtaining or maintaining insurance
          coverage, managing risks, obtaining professional advice.
        </>
      ),
    },
    {
      textno: "5.3",
      text: (
        <>Our database will be stored on the servers of our hosting services.</>
      ),
    },
    {
      textno: "5.4",
      text: (
        <>
          In addition to the specific disclosures of personal data, we may
          disclose your personal data where such disclosure is necessary for
          compliance with a legal obligation to which we are subject, or in
          order to protect your vital interests or the vital interests of
          another natural person. We may also disclose Your personal data where
          such disclosure is necessary for the establishment, exercise, or
          defence of legal claims, whether in court proceedings or in an
          administrative or out-of-court procedure.
        </>
      ),
    },
    {
      textno: "5.5",
      text: (
        <>
          Who are these people - our partners are retailers and brands from whom
          we are supplied with our goods; Third-party service providers are used
          for business purposes, to properly run our site and business; Courier
          or those who partners who ensure delivery of your chosen goods;
          payment providers that we use to process your payments; anti-fraud
          checking providers to keep both you and use safe and secure; analytics
          and search engine providers like google who improve and optimise our
          website; marketing tool providers that help us enable our marketing of
          our business and other such business which provide the services which
          allow us to function and offer your this service.
        </>
      ),
    },
  ];
  const privacy7data = [
    {
      textno: "6.1",
      text: (
        <>
          Registering through and logging in from your social media account will
          give us access to additional personal information.
        </>
      ),
    },
    {
      textno: "6.2",
      text: (
        <>
          Such a facility is or may be offered to you through such third-party
          sites as Facebook, Instagram, Tik Tok, Google and Apple.
        </>
      ),
    },
    {
      textno: "6.3",
      text: (
        <>
          When or if you choose this login option your profile information may
          also be provided, this is dependent upon your social media setting and
          the account type.
        </>
      ),
    },
    {
      textno: "6.4",
      text: (
        <>
          The information transferred may include a profile picture, name, email
          address, friends list and any other information you have available on
          a “public” setting.
        </>
      ),
    },
    {
      textno: "6.5",
      text: (
        <>
          We will only use this information as detailed in this Privacy Policy
          and if you do not wish such information to be provided please adjust
          your social media setting prior to registering or logging in through
          this medium.
        </>
      ),
    },
    {
      textno: "6.6",
      text: (
        <>
          If you allow this information to be transferred and you give
          permission for third-party access, see clause 5, those third parties
          may use the information in accordance with their own privacy policy.
        </>
      ),
    },
  ];
  const privacy8data = [
    {
      textno: "8.1",
      text: (
        <>
          These are our data retention policies and procedures, which are
          designed to help ensure that we comply with our legal obligations in
          relation to the retention and deletion of personal data.
        </>
      ),
    },
    {
      textno: "8.2",
      text: (
        <>
          Personal data that we process for any purpose or purposes shall not be
          kept for longer than is necessary for that purpose or those purposes.
        </>
      ),
    },
    {
      textno: "8.3",
      text: (
        <>
          We will retain your personal data if you have agreed to allow us to
          send you marketing emails and supply your data to third parties for
          the purpose of sending third-party marketing emails.
        </>
      ),
    },
    {
      textno: "8.4",
      text: (
        <>
          We will retain your personal data for the purposes of any business
          transaction and account creation.
        </>
      ),
    },
    {
      textno: "8.5",
      text: (
        <>
          We may retain your personal data where such retention is necessary for
          compliance with a legal obligation to which we are subject, or in
          order to protect your vital interests or the vital interests of
          another natural person. This may entail your personal data being
          retained for longer period.
        </>
      ),
    },
    {
      textno: "",
      text: (
        <>
          We may retain your personal data for as long as required for the
          requirements of our accounting obligations and for providing details
          to the HMRC if requested.
        </>
      ),
    },
    {
      textno: "8.7",
      text: (
        <>
          Wherever possible if we are required to retain your personal data for
          a longer period and we can do so safely we will anonymise your
          personal data.{" "}
        </>
      ),
    },
  ];
  const privacy9data = [
    {
      textno: "7.1",
      text: (
        <>
          We will take appropriate technical and organisational precautions to
          secure your personal data and to prevent the loss, misuse or
          alteration of your personal data.
        </>
      ),
    },
    {
      textno: "7.2",
      text: (
        <>
          We will store your personal data on secure servers, personal computers
          and mobile devices, and in secure manual record-keeping systems.
        </>
      ),
    },
    {
      textno: "7.3",
      text: (
        <>
          Data relating to your enquiries and financial transactions (not
          including your stored receipts) that is sent from your browser to your
          server, or from our server to your web browser, will be protected
          using encryption technology.
        </>
      ),
    },
    {
      textno: "7.4",
      text: (
        <>
          You acknowledge that the transmission of unencrypted or inadequately
          encrypted data over the internet is inherently insecure, and we cannot
          guarantee the security of data sent over the internet.
        </>
      ),
    },
    {
      textno: "7.5",
      text: (
        <>
          You should ensure that any authentication details, password and any
          login details are not susceptible to being guessed, whether by a
          person or a computer program. You are responsible for keeping the
          password you use for accessing our website confidential and we will
          never ask you for your password (if any), except when you log in to
          our website.
        </>
      ),
    },
  ];
  const privacy10data = [
    {
      textno: "9.1",
      text: (
        <>
          We do not knowingly collect data from or market to children under the
          age of contractual consent:
          <br />
          a) In the UK this is eighteen (16) years of age;
          <br />
          b) In the EU this is eighteen (18) years of age;
          <br />
          c) In the USA this is sixteen (16), Seventeen (17) or eighteen (18)
          years of age ,depending upon your location; and
          <br />d )In Canada this is sixteen (16) years of age.
        </>
      ),
    },
    {
      textno: "9.2",
      text: (
        <>
          In other areas please ensure you do not register to use our app if you
          are under the age of consent in your jurisdiction.
        </>
      ),
    },
    {
      textno: "9.3",
      text: (
        <>
          By using the services, you represent that you are at least 16 or that
          you are the parent or guardian of such minors and consent to such
          minor dependent’s use of the services.
        </>
      ),
    },
    {
      textno: "9.4",
      text: (
        <>
          If we learn that personal information from users less than relevant
          age of consent has been collected, and there is no parental or
          guardian permission in place we will deactivate the account and take
          reasonable measures to promptly delete such data from our records.
        </>
      ),
    },
  ];
  const privacy11data = [
    {
      textno: "10.1",
      text: (
        <>
          We provide information about the circumstances in which your personal
          data may be transferred to a third country under UK, EU and/or US data
          protection law.
        </>
      ),
    },
    {
      textno: "10.2",
      text: (
        <>
          We may transfer your personal data to the European Economic Area (EEA)
          or the US from the UK and process that personal data in the EU for the
          purposes set out in this policy, and may permit our suppliers and
          subcontractors to do so, during any period with respect to which the
          EU is not treated as a third country under UK data protection law or
          benefits from an adequacy decision under UK data protection law; and
          We may transfer your personal data from the UK to the EEA and process
          that personal data in the EEA for the purposes set out in this policy,
          and may permit our suppliers and subcontractors to do so, during any
          period with respect to which EEA states are not treated as third
          countries under UK data protection law or benefit from adequacy
          regulations under UK data protection law.
        </>
      ),
    },
    {
      textno: "10.3",
      text: (
        <>
          We may transfer outside of the UK, other than the EU or EEA, If we
          intend to do this we will notify you, in doing so we will ensure that
          the terms under which Personal Data is held is such that it complies
          with all of the same or similar requirements as if it was held in the
          EU, EEA or EU.
        </>
      ),
    },
    {
      textno: "10.4",
      text: (
        <>
          The hosting facilities for our App /website are situated in the UK
          only and our App/website hosting facilities are situated in UK. The
          competent data protection authorities have made an adequacy
          determination with respect to the data protection laws of each of
          these countries. Transfers to each of these countries will be
          protected by appropriate safeguards, namely the use of standard data
          protection clauses adopted or approved by the competent data
          protection authorities.
        </>
      ),
    },
  ];
  const privacy12data = [
    {
      textno: "11.1",
      text: (
        <>
          We have summarised the rights that you have under UK Data Protection
          Law (Data Protection Act 2018) and other laws in other jurisdictions
          where relevant.
        </>
      ),
    },
    {
      textno: "11.2",
      text: (
        <>
          Further information can be found at https://ico.org.uk/ , if you are
          in Europe contact
          https://EC.europa.eu/info/law/law-topic/data-protection/data-protection-eu_en
          and for the US contact The Federal Trade Commission at www.ftc.gov.
        </>
      ),
    },
    {
      textno: "11.3",
      text: (
        <>
          Your principal rights under data protection law are:
          <br />
          a) the right to access - you can ask for copies of Your personal data;{" "}
          <br />
          b) the right to rectification - you can ask us to rectify inaccurate
          personal data and to complete or incomplete personal data;
          <br />
          c) the right to erasure - you can ask us to erase your personal data;
          <br />
          d) the right to restrict processing - you can ask us to restrict the
          processing of your personal data; the right to object to processing -
          you can object to the processing of your personal data;
          <br />
          e) the right to data portability - you can ask that we transfer your
          personal data to another organisation or to you;
          <br />
          f) the right to complain to a supervisory authority - you can complain
          about our processing of your personal data; and
          <br />
          g) the right to withdraw consent - to the extent that the legal basis
          of our processing of your personal data is consent, you can withdraw
          that consent.
        </>
      ),
    },
    {
      textno: "11.4",
      text: (
        <>
          You have the right to confirm as to whether or not we process your
          personal data and, where we do, access to the personal data, together
          with certain additional information. That additional information
          includes details of the purposes of the processing, the categories of
          personal data concerned and the recipients of the personal data.
          Providing the rights and freedoms of others are not affected, we will
          supply you with a copy of our personal data. The first copy will be
          provided free of charge, but additional copies may be subject to a
          reasonable fee.
        </>
      ),
    },
    {
      textno: "11.5",
      text: (
        <>
          You have the right to have any inaccurate personal data about you
          rectified and, taking into account the purposes of the processing, to
          have any incomplete personal data about you completed.
        </>
      ),
    },
    {
      textno: "11.6",
      text: (
        <>
          In some circumstances you have the right to the erasure of your
          personal data without undue delay. Those circumstances include: the
          personal data are no longer necessary in relation to the purposes for
          which they were collected or otherwise processed; you withdraw consent
          to consent-based processing; you object to the processing under
          certain rules of applicable data protection law; the processing is for
          direct marketing purposes; and the personal data have been unlawfully
          processed. However, there are exclusions of the right to erasure. The
          general exclusions include where processing is necessary: for
          exercising the right of freedom of expression and information; for
          compliance with a legal obligation; or for the establishment, exercise
          or defence of legal claims.
        </>
      ),
    },
    {
      textno: "11.7",
      text: (
        <>
          In some circumstances You have the right to restrict the processing of
          your personal data. Those circumstances are: you contest the accuracy
          of the personal data; processing is unlawful but you oppose erasure;
          We no longer need the personal data for the purposes of our
          processing, but you require personal data for the establishment,
          exercise or defence of legal claims; and You have objected to
          processing, pending the verification of your objection. Where
          processing has been restricted on this basis, We may continue to store
          your personal data. However, we will only otherwise process it: with
          your consent; for the establishment, exercise or defence of legal
          claims; for the protection of the rights of another natural or legal
          person; or for reasons of important public interest.
        </>
      ),
    },
    {
      textno: "11.8",
      text: (
        <>
          You have the right to object to our processing of your personal data
          on grounds relating to your particular situation, but only to the
          extent that the legal basis for the processing is that the processing
          is necessary for: the performance of a task carried out in the public
          interest or in the exercise of any official authority vested in Us; or
          the purposes of the legitimate interests pursued by us or by a
          third-party. If you make such an objection, we will cease to process
          the personal data unless we can demonstrate compelling legitimate
          grounds for the processing which override your interests, rights and
          freedoms, or the processing is for the establishment, exercise or
          defence of legal claims.
        </>
      ),
    },
    {
      textno: "11.9",
      text: (
        <>
          You have the right to object to our processing of Your personal data
          for direct marketing purposes (including profiling for direct
          marketing purposes). If you make such an objection, we will cease to
          process your personal data for this purpose.
        </>
      ),
    },
    {
      textno: "11.10",
      text: (
        <>
          You have the right to object to our processing of your personal data
          for scientific or historical research purposes or statistical purposes
          on grounds relating to your particular situation, unless the
          processing is necessary for the performance of a task carried out for
          reasons of public interest.
        </>
      ),
    },
    {
      textno: "11.11",
      text: (
        <>
          To the extent that the legal basis for our processing of your personal
          data is:
          <br />
          a) consent; or <br />
          b) that the processing is necessary for the performance of a contract
          to which you are party or in order to take steps at your request prior
          to entering into a contract, and such processing is carried out by
          automated means, you have the right to receive your personal data from
          us in a structured, commonly used and machine-readable format.
          However, this right does not apply where it would adversely affect the
          rights and freedoms of others.
        </>
      ),
    },
    {
      textno: "11.12",
      text: (
        <>
          If you consider that our processing of your personal data infringes
          data protection laws, you have a legal right to lodge a complaint with
          a supervisory authority responsible for data protection. In relation
          to complaints under EU data protection law, you may do so in the EU
          member state of your habitual residence, your place of work or the
          place of the alleged infringement; in relation to complaints under UK
          data protection law, you should do so in the UK. In the US you should
          make a complaint to your state regulator.
        </>
      ),
    },
    {
      textno: "11.13",
      text: (
        <>
          To the extent that the legal basis for our processing of your personal
          data is consent, you have the right to withdraw that consent at any
          time. Withdrawal will not affect the lawfulness of processing before
          the withdrawal.
        </>
      ),
    },
    {
      textno: "11.14",
      text: (
        <>
          California Civil Code Section 1798.83, also known as the 'Shine The
          Light' law, permits our users who are California residents to request
          and obtain from us, once a year and free of charge, information about
          categories of personal information (if any) we disclosed to third
          parties for direct marketing purposes and the names and addresses of
          all third parties with which we shared personal information in the
          immediately preceding calendar year. If you are a California resident
          and would like to make such a request, please submit your request in
          writing to us using the contact information provided.
        </>
      ),
    },
    {
      textno: "11.15",
      text: (
        <>
          You may exercise any of your rights in relation to your personal data
          by emailing the company information email address here and making a
          Data Subject Request. Such a request must only be in respect of your
          one data.
        </>
      ),
    },
    {
      textno: "11.16",
      text: (
        <>
          Any person using the site and virtual store, who resides in Brazil,
          you may be entitled to additional privacy rights, you can ask us to:
          <br />
          a) Tell you what information we have about you and what we do with it;
          <br />
          b) Fix your personal information if something is wrong; and
          <br />
          c) Delete your information.
        </>
      ),
    },
  ];
  const privacy13data = [
    {
      textno: "12.1",
      text: (
        <>
          Meta Experience Company Ltd does not support “Do Not Track” requests.
          Whether or not any of the third-party services uses “Do Not Track”
          requests you must read their privacy policies.
        </>
      ),
    },
    {
      textno: "12.2",
      text: (
        <>
          You can check on your browser and set your options to Do Not Track
          independently of our App/website should you wish to do so.
        </>
      ),
    },
  ];
  const privacy14data = [
    {
      textno: "13.1",
      text: (
        <>
          We may update this policy from time to time to ensure we continue to
          be in compliance with the appropriate laws and regulation or if we
          offer additional services on our app/website which would require this
          policy to be updated.
        </>
      ),
    },
    {
      textno: "13.2",
      text: (
        <>Please see at the bottom of this document the “Last Updated Date”</>
      ),
    },
    {
      textno: "13.3",
      text: (
        <>
          We recommend that you read this policy from time to time to ensure you
          understand how we deal with your Personal Data.
        </>
      ),
    },
  ];
  return (
    <Wrapper>
      <Navbar />
      <TabDiv>
        <div className="tab-div">
          <h1
            className={active === 0 ? "active-heading" : "snd-heading"}
            onClick={() => setActive(0)}
          >
            ONEWAYX PRIVACY POLICY
          </h1>
          <h1
            className={active === 1 ? "active-heading" : "snd-heading"}
            onClick={() => setActive(1)}
          >
            COOKIE POLICY
          </h1>
        </div>
      </TabDiv>
      {active === 0 && (
        <MainBox>
          {/* <h1 className="first-heading2" >onewayx privacy policy</h1> */}
          {privacydata.map((item, index) => {
            const { heading, text } = item;
            return (
              <TextBox key={index}>
                <div>
                  {/* <p className="heading-text" style={{display:'none'}}>{heading}</p> */}
                  <p className="policy-text">{text}</p>
                </div>
              </TextBox>
            );
          })}
          <div className="list-div">
            <ul>
              <li className="first-li">WHAT INFORMATION DO WE COLLECT</li>
              <li>SPECIAL CATEGORY DATA</li>
              <li>HOW DO WE PROCESS YOUR INFORMATION</li>
              <li>
                WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                INFORMATION
              </li>
              <li>WHO DO WE SHARE YOUR PERSONAL INFORMATION</li>
              <li>HOW DO WE HANDLE YOUR LOGINS</li>
              <li>HOW DO WE KEEP YOUR INFORMATION SECURE</li>
              <li>HOW LONG DO WE NEED TO KEEP YOUR INFORMATION</li>
              <li>OUR POLICY ON MINORS</li>
              <li>INTERNATIONAL TRANSFERS</li>
              <li>YOUR PRIVACY RIGHTS</li>
              <li>DO-NOT-TRACK</li>
              <li>UPDATING THIS POLICY</li>
            </ul>
            <p className="heading-text">WHAT INFORMATION DO WE COLLECT</p>
            {privacy2data.map((item, index) => {
              const { text, textno, texta, textano, heading } = item;
              return (
                <TextBox key={index}>
                  <div>
                    {/* <p className="heading-text">{heading}</p> */}
                    <div className="no-text-div">
                      <p className="no-text">{textno}</p>
                      <p className="policy-text">{text}</p>
                    </div>
                    <div className="text-a-div">
                      <p className="text-a-no">{textano}</p>
                      <p className="text-a">{texta}</p>
                    </div>
                  </div>
                </TextBox>
              );
            })}
            <p className="heading-text">SPECIAL CATEGORY DATA</p>
            {privacy3data.map((item, index) => {
              const { text, textno, texta, textano } = item;
              return (
                <TextBox key={index}>
                  <div>
                    <div className="no-text-div">
                      <p className="no-text">{textno}</p>
                      <p className="policy-text">{text}</p>
                    </div>
                    <div className="text-a-div">
                      <p className="text-a-no">{textano}</p>
                      <p className="text-a">{texta}</p>
                    </div>
                  </div>
                </TextBox>
              );
            })}
            <p className="heading-text"> HOW DO WE PROCESS YOUR INFORMATION</p>
            {privacy4data.map((item, index) => {
              const { text, textno, texta, textano } = item;
              return (
                <TextBox key={index}>
                  <div>
                    <div className="no-text-div">
                      <p className="no-text">{textno}</p>
                      <p className="policy-text">{text}</p>
                    </div>
                    <div className="text-a-div">
                      <p className="text-a-no">{textano}</p>
                      <p className="text-a">{texta}</p>
                    </div>
                  </div>
                </TextBox>
              );
            })}
            <p className="heading-text">
              WHO DO WE SHARE YOUR PERSONAL INFORMATION?
            </p>
            {privacy5data.map((item, index) => {
              const { text, textno, texta, textano } = item;
              return (
                <TextBox key={index}>
                  <div>
                    <div className="no-text-div">
                      <p className="no-text">{textno}</p>
                      <p className="policy-text">{text}</p>
                    </div>
                    <div className="text-a-div">
                      <p className="text-a-no">{textano}</p>
                      <p className="text-a">{texta}</p>
                    </div>
                  </div>
                </TextBox>
              );
            })}
          </div>
          <div className="table-div">
            <div className="table-card">
              <p className="box-text">Purpose/Activity</p>
            </div>
            <div className="table-card">
              <p className="box-text">Type of Data</p>
            </div>
            <div className="table-card">
              <p className="box-text">
                Lawful basis for processing including basis of legitimate
                interest.
              </p>
            </div>
            <div className="table-card-small">
              <p className="box-text">To register you as a new User</p>
            </div>
            <div className="table-card-small">
              <div
                className="a-div"
                style={{ display: "flex", gap: "10px", textAlign: "center" }}
              >
                <p className="textano">a)</p>
                <p className="box-text">Identity</p>
              </div>
              <div
                className="a-div"
                style={{ display: "flex", gap: "10px", textAlign: "center" }}
              >
                <p className="textano">b)</p>
                <p className="box-text">Contact</p>
              </div>
            </div>
            <div className="table-card-small">
              <p className="box-text">Performance of a contract.</p>
            </div>
            <div className="table-card">
              <p className="box-text">
                To process your account details including:{" "}
              </p>
              <div
                className="a-div"
                style={{ display: "flex", gap: "10px", textAlign: "center" }}
              >
                <p className="textano">a)</p>
                <p className="box-text">
                  Manage any payments, fees and charges;
                </p>
              </div>
              <div
                className="a-div"
                style={{ display: "flex", gap: "10px", textAlign: "center" }}
              >
                <p className="textano">b)</p>
                <p className="box-text">Collect and recover money owed to us</p>
              </div>
            </div>
            <div className="table-card">
              <div
                className="a-div"
                style={{ display: "flex", gap: "10px", textAlign: "center" }}
              >
                <p className="textano">a)</p>
                <p className="box-text">Identity</p>
              </div>
              <div
                className="a-div"
                style={{ display: "flex", gap: "10px", textAlign: "center" }}
              >
                <p className="textano">b)</p>
                <p className="box-text">Financial </p>
              </div>
              <div
                className="a-div"
                style={{ display: "flex", gap: "10px", textAlign: "center" }}
              >
                <p className="textano">c)</p>
                <p className="box-text">Transaction</p>
              </div>
              <div
                className="a-div"
                style={{ display: "flex", gap: "10px", textAlign: "center" }}
              >
                <p className="textano">d)</p>
                <p className="box-text">Marketing and communications </p>
              </div>
            </div>
            <div className="table-card">
              <p className="policy-text">
                Performance of a contract with you and necessary for our
                legitimate interest <br />
                (To recover dents due to us)
              </p>
            </div>

            <div className="big-card">
              <p className="policy-text">
                To manage our relationship with you which will include:
              </p>
              <div
                className="a-div"
                style={{ display: "flex", gap: "10px", textAlign: "center" }}
              >
                <p className="textano">a)</p>
                <p className="box-text">
                  Notifying you about changes to our terms or privacy policy;
                </p>
              </div>
              <div
                className="a-div"
                style={{ display: "flex", gap: "10px", textAlign: "center" }}
              >
                <p className="textano">b)</p>
                <p className="box-text">
                  Asking you to leave a review or take a survey;
                </p>
              </div>
              <div
                className="a-div"
                style={{ display: "flex", gap: "10px", textAlign: "center" }}
              >
                <p className="textano">c)</p>
                <p className="box-text">
                  Agree to your modes of communication with you
                </p>
              </div>
              <div
                className="a-div"
                style={{ display: "flex", gap: "10px", textAlign: "center" }}
              >
                <p className="textano">a)</p>
                <p className="box-text">
                  To send users marketing information and offers from third
                  parties
                </p>
              </div>
            </div>
            <div className="big-card">
              <p className="policy-text"> a) Identity</p>
              <p className="policy-text"> b) Contact</p>
              <p className="policy-text"> c) Profile</p>
              <p className="policy-text"> d) Marketing and communications</p>
            </div>
            <div className="big-card">
              <p className="policy-text">
                {" "}
                a) Performance of a contract with you
              </p>
              <p className="policy-text">
                {" "}
                b) Necessary to comply with a legal obligation
              </p>
              <p className="policy-text">
                {" "}
                c) Necessary for our legitimate interest (to keep our records
                updated and to study how our customers use our products/services
              </p>
            </div>
            <div className="table-card-small">
              <p className="policy-text">
                To enable you to partake in a prize draw, competition or
                complete a survey
              </p>
            </div>
            <div className="table-card-small">
              <p className="policy-text">a) Identity</p>
              <p className="policy-text">b) Contact</p>
              <p className="policy-text">c) Profile</p>
              <p className="policy-text">d) Usage</p>
              <p className="policy-text">e) Marketing and communications </p>
            </div>
            <div className="table-card-small">
              <p className="policy-text">
                a) Performance of a contract with you
              </p>
              <p className="policy-text">
                b) Necessary for our legitimate interests (to study how
                customers use our products/services, to develop them and grow
                our business.
              </p>
            </div>
            <div className="big-card">
              <p className="policy-text">
                To administer and protect our business and this App/Website
                (including trouble shooting, data analysis, testing, system
                maintenance, support, reporting and hosting data)
              </p>
            </div>
            <div className="big-card">
              <p className="policy-text">a) Identity</p>
              <p className="policy-text">b) Contact</p>
              <p className="policy-text">c) Technical</p>
            </div>
            <div className="big-card">
              <p className="policy-text">
                a) necessary for our legitimate interest (for running our
                business, provision of administration and IT services, network
                security, to prevent fraud and in the context of a business
                reorganisation or group restructuring exercise)
              </p>
              <p className="policy-text">
                b) Necessary to comply with a legal obligation).
              </p>
            </div>
            <div className="table-card">
              <p className="policy-text">
                To deliver relevant App/Website content to you and measure or
                understand the effectiveness of the content we serve to you.
              </p>
            </div>
            <div className="table-card">
              <p className="policy-text">a) Identity</p>
              <p className="policy-text">b) Contact</p>
              <p className="policy-text">c) Profile</p>
              <p className="policy-text">d) Usage</p>
              <p className="policy-text">e) Marketing and communications</p>
              <p className="policy-text">f) Technical</p>
            </div>
            <div className="table-card">
              <p className="policy-text">
                Necessary for our legitimate interest (to study how customer,
                buyers and/or vendors use our products/services to develop them,
                to grow our business and to inform you of our marketing
                strategy).
              </p>
            </div>
            <div className="table-card">
              <p className="policy-text">
                Two use data analytics to improve our App/Website, services,
                marketing, customer relationships and experiences.
              </p>
            </div>
            <div className="table-card">
              <p className="policy-text">a) Usage</p>
              <p className="policy-text">b) Technical</p>
            </div>
            <div className="table-card">
              <p className="policy-text">
                Necessary for our legitimate interests (to define types of
                customers for our products/services, to keep our App/Website
                updated and relevant, to develop our business and to inform you
                of our marketing strategy.
              </p>
            </div>
            <div className="table-card">
              To make suggestions and recommendations to you about services that
              may be of interest to you, this to include accuses to direct
              marketing by third parties on our App/website
            </div>
            <div className="table-card">
              <p className="policy-text">a) Identity</p>
              <p className="policy-text">b) Contact</p>
              <p className="policy-text">c) Profile</p>
              <p className="policy-text">d) Usage</p>
              <p className="policy-text">e) Marketing and communications</p>
              <p className="policy-text">f) Technical</p>
            </div>
            <div className="table-card">
              <p className="policy-text">
                Necessary for our legitimate interest (to develop our
                products/services and grow our business)
              </p>
            </div>
          </div>
          <div className="list-div">
            <p className="heading-text">
              WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
              INFORMATION
            </p>
            {privacy6data.map((item, index) => {
              const { text, textno, texta, textano } = item;
              return (
                <TextBox key={index}>
                  <div>
                    <div className="no-text-div">
                      <p className="no-text">{textno}</p>
                      <p className="policy-text">{text}</p>
                    </div>
                    <div className="text-a-div">
                      <p className="text-a-no">{textano}</p>
                      <p className="text-a">{texta}</p>
                    </div>
                  </div>
                </TextBox>
              );
            })}
            <p className="heading-text">LOGGING IN</p>
            {privacy7data.map((item, index) => {
              const { text, textno, texta, textano } = item;
              return (
                <TextBox key={index}>
                  <div>
                    <div className="no-text-div">
                      <p className="no-text">{textno}</p>
                      <p className="policy-text">{text}</p>
                    </div>
                    <div className="text-a-div">
                      <p className="text-a-no">{textano}</p>
                      <p className="text-a">{texta}</p>
                    </div>
                  </div>
                </TextBox>
              );
            })}
            <p className="heading-text">KEEPING YOUR INFORMATION SAFE</p>
            {privacy9data.map((item, index) => {
              const { text, textno, texta, textano } = item;
              return (
                <TextBox key={index}>
                  <div>
                    <div className="no-text-div">
                      <p className="no-text">{textno}</p>
                      <p className="policy-text">{text}</p>
                    </div>
                    <div className="text-a-div">
                      <p className="text-a-no">{textano}</p>
                      <p className="text-a">{texta}</p>
                    </div>
                  </div>
                </TextBox>
              );
            })}
            <p className="heading-text">
              HOW LONG DO WE NEED TO KEEP YOUR INFORMATION?
            </p>
            {privacy8data.map((item, index) => {
              const { text, textno, texta, textano } = item;
              return (
                <TextBox key={index}>
                  <div>
                    <div className="no-text-div">
                      <p className="no-text">{textno}</p>
                      <p className="policy-text">{text}</p>
                    </div>
                    <div className="text-a-div">
                      <p className="text-a-no">{textano}</p>
                      <p className="text-a">{texta}</p>
                    </div>
                  </div>
                </TextBox>
              );
            })}
            <p className="heading-text">OUR POLICY ON MINORS</p>
            {privacy10data.map((item, index) => {
              const { text, textno, texta, textano } = item;
              return (
                <TextBox key={index}>
                  <div>
                    <div className="no-text-div">
                      <p className="no-text">{textno}</p>
                      <p className="policy-text">{text}</p>
                    </div>
                    <div className="text-a-div">
                      <p className="text-a-no">{textano}</p>
                      <p className="text-a">{texta}</p>
                    </div>
                  </div>
                </TextBox>
              );
            })}
            <p className="heading-text">
              INTERNATIONAL TRANSFERS OF YOUR PERSONAL DATA
            </p>
            {privacy11data.map((item, index) => {
              const { text, textno, texta, textano } = item;
              return (
                <TextBox key={index}>
                  <div>
                    <div className="no-text-div">
                      <p className="no-text">{textno}</p>
                      <p className="policy-text">{text}</p>
                    </div>
                    <div className="text-a-div">
                      <p className="text-a-no">{textano}</p>
                      <p className="text-a">{texta}</p>
                    </div>
                  </div>
                </TextBox>
              );
            })}
            <p className="heading-text">YOUR RIGHTS</p>
            {privacy12data.map((item, index) => {
              const { text, textno, texta, textano } = item;
              return (
                <TextBox key={index}>
                  <div>
                    <div className="no-text-div">
                      <p className="no-text">{textno}</p>
                      <p className="policy-text">{text}</p>
                    </div>
                    <div className="text-a-div">
                      <p className="text-a-no">{textano}</p>
                      <p className="text-a">{texta}</p>
                    </div>
                  </div>
                </TextBox>
              );
            })}
            <p className="heading-text">DO NOT TRACK</p>
            {privacy13data.map((item, index) => {
              const { text, textno, texta, textano } = item;
              return (
                <TextBox key={index}>
                  <div>
                    <div className="no-text-div">
                      <p className="no-text">{textno}</p>
                      <p className="policy-text">{text}</p>
                    </div>
                    <div className="text-a-div">
                      <p className="text-a-no">{textano}</p>
                      <p className="text-a">{texta}</p>
                    </div>
                  </div>
                </TextBox>
              );
            })}
            <p className="heading-text">UPDATING THIS POLICY</p>
            {privacy14data.map((item, index) => {
              const { text, textno, texta, textano } = item;
              return (
                <TextBox key={index}>
                  <div>
                    <div className="no-text-div">
                      <p className="no-text">{textno}</p>
                      <p className="policy-text">{text}</p>
                    </div>
                    <div className="text-a-div">
                      <p className="text-a-no">{textano}</p>
                      <p className="text-a">{texta}</p>
                    </div>
                  </div>
                </TextBox>
              );
            })}
          </div>
        </MainBox>
      )}

      {active === 1 && (
        <MainBox>
          {/* <h1 className="first-heading2">Cookie Policy</h1> */}
          {/* <p className="introduction-title">
          An introduction to our Cookie Policy please also read our Privacy
          Policy
        </p> */}
          {cookiedata.map((item, index) => {
            const { heading, text, text2, suboption } = item;
            return (
              <TextBox key={index}>
                <div>
                  <p className="heading-text">{heading}</p>
                  <p className="policy-text">{text}</p>
                  <p className="sub-option">{suboption}</p>
                  <p className="policy-text">{text2}</p>
                </div>
              </TextBox>
            );
          })}
        </MainBox>
      )}
    </Wrapper>
  );
};
export default PrivacyPolicy;
