import React from "react";
import { Wrapper, MainBox, TextBox } from "./style";
import Navbar from "../layout/navbar";

const TermsConditions = () => {
  const termdata = [
    {
      heading: "BACKGROUND",
      text: (
        <>
          We are bringing to you an exciting new immersive and interactive
          shopping experience and we have detailed below our terms and
          conditions.
          <br />
          <br />
          We define certain terms and words in thesis Terms and Conditions and
          they are identified with a Capital letter, which gives them a specific
          meaning. Where a defined term is used, it has the meaning given to it
          in the section of the Terms and Conditions where it was defined, some
          are in brackets and/or speech marks.
          <br />
          <br />
          We, along with certain of our affiliates, provide the services through
          the website. Further details of the services we provide are set out
          below. When you purchase products using the website, you are
          purchasing them from the third-party retailers ("Partner(s)"). It is
          important that you understand that the contract for the purchase of
          the products is between you and the relevant Partner. You are not
          purchasing the products from us. We are authorised by the relevant
          Partners to conclude the contract on their behalf but we are not a
          party to that contract and you are not purchasing the products from
          us. or through us as your agent.
        </>
      ),
    },
    {
      heading: "HOW DOES IT WORK?",
      text: (
        <>
          The Services we offer allow you to search through each department of
          the website using a visual tour and try on the products (virtually)
          and then purchase products from a large number of Partner boutiques
          from around the world.
          <br />
          <br />
          We also provide some ancillary services such as arranging delivery of
          the products and providing you with customer service assistance. As
          stated above, the contract for the purchase of the products is between
          you and the relevant Partner. This means that it is the Partner (not
          us) who is legally responsible for selling the products to you. We may
          make a charge for these services which will be shown at checkout and
          prior to your purchase of the products.{" "}
          <span className="span-highlight">
            Your contract with us is concluded once the products have been
            delivered to you by the courier or have been collected by you from a
            Partner.
          </span>
          <br />
          <br />
          The products MEC attempt to be as accurate as possible in the
          description of the products displayed on the Website. However, as the
          descriptions are based on information provided to us by the Partners
          (who remain responsible for them), we cannot guarantee that all
          details are always accurate, complete or error free. Please contact us
          on email address here if you would like more information about a
          product. The images of the products on the Website are for
          illustrative purposes only, and although we attempt to display colours
          accurately, we cannot guarantee that your computer's display of the
          images accurately reflects the true colour of the products. All
          products available are first quality and there are no second quality
          or flawed sold on the site.
        </>
      ),
    },
  ];
  const term1data = [
    {
      text: (
        <>
          These Terms and Conditions (this “Agreement”) is entered into by and
          between Meta Experience Company Ltd, registered number 14150721,
          registered address 86-90 Paul Street, London, EC2A 4NE (“MEC”) and
          you, and is made effective as of the date of your use of this website
          (“Site”) or the creation of an account with MEC and you expressly
          agree to these terms.
        </>
      ),
    },
    {
      textno: "1.1",
      text: (
        <>
          This Agreement sets forth the general terms and conditions of your use
          of the Site and the products purchased or services supplied or
          accessed through this Site (individually and collectively, the
          “Services”), and is in addition to (not in lieu of) any specific terms
          and conditions that apply to the particular products and services
          supplied through our site.
        </>
      ),
    },
    {
      textno: "1.2",
      text: (
        <>
          Whether you are simply browsing or using this Site or purchase
          products, your use of this Site and you are deemed to have read and
          accepted this Agreement and that you understand, acknowledge and agree
          to be bound by this Agreement, along with the following policies,
          including Privacy Policy, Cookie Policy and any other terms which are
          made available on the website and any applicable product agreements,
          including any manufacturers or suppliers warranty or guarantee, which
          are incorporated herein by reference:
        </>
      ),
    },
    {
      textno: "1.3",
      text: (
        <>
          The terms “we”, “us” or “our” shall refer to MEC. The terms “you”,
          “your”, “User” or “customer” shall refer to any individual or entity
          who accepts this Agreement, has access to your account or uses the
          products or Services. Nothing in this Agreement shall be deemed to
          confer any third-party rights or benefits.
        </>
      ),
    },
    {
      textno: "1.4",
      text: (
        <>
          MEC may, in its sole and absolute discretion, change or modify this
          Agreement, and any policies or agreements which are incorporated
          herein, at any time, and such changes or modifications shall be
          effective immediately upon posting to this Site.
        </>
      ),
    },
    {
      textno: "1.5",
      text: (
        <>
          Your use of this Site or the products and services after such changes
          or modifications have been made shall constitute your acceptance of
          this Agreement as last revised. If you do not agree to be bound by
          this Agreement as last revised, do not use (or continue to use) this
          Site or the products or Services offer and available through it.
        </>
      ),
    },
    {
      textno: "1.6",
      text: (
        <>
          In addition, MEC may occasionally notify you of changes or
          modifications to this Agreement by email. It is therefore very
          important that you keep your shopper account (“Account”) information
          current. MEC assumes no liability or responsibility for your failure
          to receive an email notification if such failure results from an
          inaccurate email address.
        </>
      ),
    },
  ];
  const term2data = [
    {
      textno: "2.1",
      text: (
        <>
          This Site and the products or Services are available only to Users who
          can form legally binding contracts under applicable law. By using this
          Site or the products or Services, you represent and warrant that you
          are (i) at least eighteen (16) years of age, (ii) otherwise recognised
          as being able to form legally binding contracts under applicable law,
          and (iii) are not a person barred from purchasing or receiving the
          Services found under the laws of England and Wales.
        </>
      ),
    },
  ];
  const term3data = [
    {
      textno: "3.1",
      text: (
        <>
          Accounts. In order to access some of the features of this Site or use
          some of the Services, you will have to create an Account.
        </>
      ),
    },
    {
      textno: "3.2",
      text: (
        <>
          You represent and warrant to MEC that all information you submit when
          you create your Account is accurate, current and complete, and that
          you will keep your Account information accurate, current and complete.
        </>
      ),
    },
    {
      textno: "3.3",
      text: (
        <>
          If MEC has reason to believe that your Account information is untrue,
          inaccurate, out-of-date or incomplete, MEC reserves the right, in its
          sole and absolute discretion, to suspend or terminate your Account.
        </>
      ),
    },
    {
      textno: "3.4",
      text: (
        <>
          You are solely responsible for the activity that occurs on your
          Account, whether authorised by you or not, and you must keep your
          Account information secure, including without limitation your customer
          number/login, password, Payment Method(s) (as defined below). For
          security purposes, MEC recommends that you change your password at
          least once every six (6) months for each Account.
        </>
      ),
    },
    {
      textno: "3.5",
      text: (
        <>
          You must notify MEC immediately of any breach of security or
          unauthorised use of your Account.
        </>
      ),
    },
    {
      textno: "3.6",
      text: (
        <>
          MEC will not be liable for any loss you incur due to any unauthorised
          use of your Account. You, however, may be liable for any loss MEC or
          others incur caused by your Account, whether caused by you, or by an
          authorised person, or by an unauthorised person.
        </>
      ),
    },
    {
      textno: "3.7",
      text: (
        <>
          Transfer of Data Abroad. If you are visiting this Site from a country
          other than the country in which our servers are located, which is
          within the UK/EU, your communications with us may result in the
          transfer of information (including your Account information) across
          international boundaries. By visiting this Site and communicating
          electronically with us, you consent to such transfers.
        </>
      ),
    },
  ];
  const term4data = [
    {
      textno: "4.1",
      text: (
        <>
          Subject to the terms and conditions of this Agreement and our other
          policies and procedures, we shall use commercially reasonable efforts
          to attempt to provide this Site and the products or Services on a
          twenty-four (24) hours a day, seven (7) days a week basis.
        </>
      ),
    },
    {
      textno: "4.2",
      text: (
        <>
          You acknowledge and agree that from time to time this Site may be
          inaccessible or inoperable for any reason including, but not limited
          to, equipment malfunctions; periodic maintenance, repairs or
          replacements that we undertake from time to time; or causes beyond our
          reasonable control or that are not reasonably foreseeable including,
          but not limited to, interruption or failure of telecommunication or
          digital transmission links, hostile network attacks, network
          congestion or other failures.
        </>
      ),
    },
    {
      textno: "4.3",
      text: (
        <>
          You acknowledge and agree that we have no control over the
          availability of this Site or the products or Services on a continuous
          or uninterrupted basis, and that we assume no liability to you or any
          other party with regard thereto. From time to time, MEC may offer new
          products or Services
        </>
      ),
    },
  ];
  const term5data = [
    {
      textno: "5.1",
      text: <>You acknowledge and agree that:</>,
      textano: "a)",
      texta: (
        <>
          Your use of this Site and the products or Services, including any
          content you submit to our community chat facility, will comply with
          this Agreement and all applicable local, state, national and
          international laws, rules and regulations;
        </>
      ),
    },
    {
      textano: "b)",
      texta: (
        <>
          You will not collect or harvest (or permit anyone else to collect or
          harvest) any User Content (as defined below) or any non-public or
          personally identifiable information about another User or any other
          person or entity without their express prior written consent.
        </>
      ),
    },
    {
      textano: "c)",
      texta: (
        <>
          You will not use this Site or the products or Services in a manner (as
          determined by MEC in its sole and absolute discretion) that:
        </>
      ),
    },
    {
      textano: "d)",
      texta: <>is illegal, or promotes or encourages illegal activity;</>,
    },
    {
      textano: "e)",
      texta: (
        <>
          promotes, encourages or engages in child pornography or the
          exploitation of children;
        </>
      ),
    },
    {
      textano: "f)",
      texta: (
        <>
          promotes, encourages or engages in terrorism, violence against people,
          animals, or property;
        </>
      ),
    },
    {
      textano: "g)",
      texta: (
        <>
          promotes, encourages or engages in any spam or other unsolicited bulk
          email, or computer or network hacking or cracking;
        </>
      ),
    },
    {
      textano: "h)",
      texta: (
        <>
          promotes, encourages or engages in the sale or distribution of
          prescription medication without a valid prescription;
        </>
      ),
    },
    {
      textano: "i)",
      texta: (
        <>
          infringes on the intellectual property rights of another User or any
          other person or entity;
        </>
      ),
    },
    {
      textano: "j)",
      texta: (
        <>
          violates the privacy or publicity rights of another User or any other
          person or entity, or breaches any duty of confidentiality that you owe
          to another User or any other person or entity;
        </>
      ),
    },
    {
      textano: "k)",
      texta: (
        <>
          interferes with the operation of this Site or the Services found at
          this Site;
        </>
      ),
    },
    {
      textano: "l)",
      texta: (
        <>
          contains or installs any viruses, worms, bugs, Trojan horses,
          Cryptocurrency Miners or other code, files or programs designed to, or
          capable of, using many resources, disrupting, damaging or limiting the
          functionality of any software or hardware; or
        </>
      ),
    },
    {
      textano: "m)",
      texta: (
        <>
          contains false or deceptive language, or unsubstantiated or
          comparative claims, regarding MEC or MEC’s Services.
        </>
      ),
    },
    {
      textno: "5.2",
      text: (
        <>
          You will not copy or distribute in any medium any part of this Site or
          the products or Services, except where expressly authorised by MEC.
        </>
      ),
    },
    {
      textno: "5.3",
      text: (
        <>
          You will not modify or alter any part of this Site or the products or
          Services found at this Site or any of its related technologies.
        </>
      ),
    },
    {
      textno: "5.4",
      text: (
        <>
          You will not access MEC’s content (as defined below) or user content
          through any technology or means other than through this Site itself,
          or as MEC may designate.
        </>
      ),
    },
    {
      textno: "5.5",
      text: (
        <>
          You agree to back-up all of your user content so that you can access
          and use it when needed. MEC does not warrant that it backs-up any
          account or user content information, and you agree to accept as a risk
          the loss of any and all of your user content.
        </>
      ),
    },
    {
      textno: "5.6",
      text: (
        <>
          You will not re-sell or provide the products or Services for a
          commercial purpose, including any of MEC’s related technologies,
          without MEC's express prior written consent.
        </>
      ),
    },
    {
      textno: "5.7",
      text: (
        <>
          You agree to provide government-issued photo identification and/or
          government-issued business identification as required for verification
          of identity if requested, this may be required for MEC to fulfil its
          “Know Your Customer” and Anti Money Laundering” responsibilities.
        </>
      ),
    },
    {
      textno: "5.8",
      text: (
        <>
          You are aware that MEC may from time-to-time contact you about your
          account. You will be informed about such recording, purposes thereof,
          as well as any other information will be provided to you as required
          by applicable law. You further acknowledge and agree that, to the
          extent permitted by applicable law, any such recording(s) may be
          submitted as evidence in any legal proceeding, in which MEC is a
          party.
        </>
      ),
    },
    {
      textno: "5.9",
      text: (
        <>
          MEC reserves the right to modify, change, or discontinue any aspect of
          this Site or the Services, including without limitation prices and
          fees for the same, at any time.
        </>
      ),
    },
  ];
  const term6data = [
    {
      textno: "6.1",
      text: (
        <>
          In addition to the general rules above, the provisions in this Section
          apply specifically to your use of MEC content and User Content posted
          to MEC’s website (i.e., those sites which MEC directly controls or
          maintains).
        </>
      ),
    },
    {
      textno: "6.2",
      text: (
        <>
          The applicable provisions are not intended to and do not have the
          effect of transferring any ownership or licensed rights (including
          intellectual property rights) you may have in content posted to your
          hosted websites.
        </>
      ),
    },
    {
      textno: "6.3",
      text: (
        <>
          MEC Content. Except for user content, the content on this Site and the
          Services, including without limitation the text, software, scripts,
          source code, API, graphics, photos, sounds, music, videos and
          interactive features and the trademarks, service marks and logos
          contained therein (“MEC Content”), are owned by or licensed to MEC in
          perpetuity, and are subject to copyright, trademark, and/or patent
          protection in the United Kingdom and foreign countries, and other
          intellectual property rights under UK and foreign laws.
        </>
      ),
    },
    {
      textno: "6.4",
      text: (
        <>
          MEC Content is provided to you “as is”, “as available” and “with all
          faults” for your information and personal, non-commercial use only and
          may not be downloaded, copied, reproduced, distributed, transmitted,
          broadcast, displayed, sold, licensed, or otherwise exploited for any
          purposes whatsoever without the express prior written consent of MEC.
          6.5 No right or license under any copyright, trademark, patent, or
          other proprietary right or license is granted by this Agreement. MEC
          reserves all rights not expressly granted in and to the MEC Content,
          this Site and the products or Services, and this Agreement do not
          transfer ownership of any of these rights.
        </>
      ),
    },
    {
      textno: "6.5",
      text: (
        <>
          User Content. Some of the features of this Site or the products or
          Services may allow Users to view, post, publish, share, store, or
          manage;
        </>
      ),
      textano: "a) ",
      texta: (
        <>
          ideas, opinions, recommendations, or advice (“User Submissions”); or
        </>
      ),
    },
    {
      textano: "b) ",
      texta: (
        <>
          literary, artistic, musical, or other content, including but not
          limited to photos and videos (together with User Submissions, “User
          Content”).
        </>
      ),
    },
    {
      textno: "6.6",
      text: (
        <>User Content includes all content submitted through your Account.</>
      ),
    },
    {
      textno: "6.7",
      text: (
        <>
          By posting or publishing User Content to this Site or to the Services,
          you represent and warrant to MEC that;
        </>
      ),
      textano: "a)",
      text: (
        <>
          you have all necessary rights to distribute User Content via this
          Site, either because you are the author of the User Content and have
          the right to distribute the same, or because you have the appropriate
          distribution rights, licenses, consents, and/or permissions to use, in
          writing, from the copyright or other owner of the User Content; and
          6.8 2 the User Content does not violate the rights of any third party
          Security.
        </>
      ),
      textano: "a)",
      texta: (
        <>
          you have all necessary rights to distribute User Content via this
          Site, either because you are the author of the User Content and have
          the right to distribute the same, or because you have the appropriate
          distribution rights, licenses, consents, and/or permissions to use, in
          writing, from the copyright or other owner of the User Content; and
          6.8 2 the User Content does not violate the rights of any third party
          Security.
        </>
      ),
    },
    {
      textno: "6.8",
      text: (
        <>
          You agree not to circumvent, disable or otherwise interfere with the
          security-related features of this Site or the Services found at this
          Site (including without limitation those features that prevent or
          restrict use or copying of any MEC Content or User Content) or enforce
          limitations on the use of this Site or the Services found at this
          Site, the MEC Content or the User Content therein.
        </>
      ),
    },
  ];
  const term7data = [
    {
      textno: "7.1",
      text: (
        <>
          The provisions in this Section apply specifically to MEC’s use of User
          Content posted to MEC’s corporate websites (i.e., those sites which
          MEC directly controls or maintains).
        </>
      ),
    },
    {
      textno: "7.2",
      text: (
        <>
          The applicable provisions are not intended to and do not have the
          effect of transferring any ownership or licensed rights (including
          intellectual property rights) you may have in content posted to your
          hosted websites.
        </>
      ),
    },
    {
      textno: "7.3",
      text: (
        <>
          Generally. You shall be solely responsible for any and all of your
          User Content or User Content that is submitted through your Account,
          and the consequences of, and requirements for, distributing it.
        </>
      ),
    },
    {
      textno: "7.4",
      text: (
        <>With Respect to User Submissions. You acknowledge and agree that:</>
      ),
      textano: "a)",
      texta: (
        <>
          Your User Submissions are entirely voluntary; Your User Submissions do
          not establish a confidential relationship or obligate MEC to treat
          your User Submissions as confidential or secret;
        </>
      ),
    },
    {
      textano: "b)",
      texta: (
        <>
          Your User Submissions are entirely voluntary; Your User Submissions do
          not establish a confidential relationship or obligate MEC to treat
          your User Submissions as confidential or secret;
        </>
      ),
    },
    {
      textano: "c)",
      texta: (
        <>
          MEC may be working on the same or similar content, it may already know
          of such content from other sources, it may simply wish to develop this
          (or similar) content on its own, or it may have taken / will take some
          other action.
        </>
      ),
    },
    {
      textno: "7.5",
      text: (
        <>
          MEC shall own exclusive rights (including all intellectual property
          and other proprietary rights) to any User Submissions posted to this
          Site and shall be entitled to the unrestricted use and dissemination
          of any User Submissions posted to this Site for any purpose,
          commercial or otherwise, without acknowledgment or compensation to you
          or to anyone else. With Respect to User Content (Other Than User
          Submissions).
        </>
      ),
    },
    {
      textno: "7.6",
      text: (
        <>
          By posting or publishing User Content to this Site or through the
          Services, you authorise MEC to use the intellectual property and other
          proprietary rights in and to your User Content to enable inclusion and
          use of the User Content in the manner contemplated by this Site and
          this Agreement.
        </>
      ),
    },
    {
      textno: "7.7",
      text: (
        <>
          You hereby grant MEC a worldwide, non-exclusive, royalty-free,
          sub-licensable (through multiple tiers), and transferable license to
          use, reproduce, distribute, prepare derivative works of, combine with
          other works, display, and perform your User Content in connection with
          this Site, the Services and MEC’s (and MEC’s affiliates’)
          business(es), including without limitation for promoting and
          redistributing all or part of this Site in any media formats and
          through any media channels without restrictions of any kind and
          without payment or other consideration of any kind, or permission or
          notification, to you or any third party.
        </>
      ),
    },
    {
      textno: "7.8",
      text: (
        <>
          You also hereby grant each User of this Site a non-exclusive license
          to access your User Content (with the exception of User Content that
          you designate “private” or “password protected”) through this Site,
          and to use, reproduce, distribute, prepare derivative works of,
          combine with other works, display, and perform your User Content as
          permitted through the functionality of this Site and under this
          Agreement. The above licenses granted by you in your User Content
          terminate within a commercially reasonable time after you remove or
          delete your User Content from this Site.
        </>
      ),
    },
    {
      textno: "7.9",
      text: (
        <>
          You understand and agree, however, that MEC may retain (but not
          distribute, display, or perform) server copies of your User Content
          that have been removed or deleted.
        </>
      ),
    },
    {
      textno: "7.10",
      text: (
        <>
          The above licenses granted by you in your User Content are perpetual
          and irrevocable. Notwithstanding anything to the contrary contained
          herein, MEC shall not use any User Content that has been designated
          “private” or “password protected” by you for the purpose of promoting
          this Site or MEC’s (or MEC’s affiliates’) business(es).
        </>
      ),
    },
  ];
  const term8data = [
    {
      textno: "8.1",
      text: (
        <>
          MEC generally does not pre-screen User Content (whether posted to a
          website hosted by MEC or posted to this Site).
        </>
      ),
    },
    {
      textno: "",
      text: (
        <>
          However, MEC reserves the right (but undertakes no duty) to do so and
          decide whether any item of User Content is appropriate and/or complies
          with this Agreement.
        </>
      ),
    },
    {
      textno: "",
      text: (
        <>
          MEC may remove any item of User Content and/or terminate a User’s
          access to this Site or the Services found at this Site for posting or
          publishing any material in violation of this Agreement, or for
          otherwise violating this Agreement (as determined by MEC in its sole
          and absolute discretion), at any time and without prior notice.
        </>
      ),
    },
    {
      textno: "",
      text: (
        <>
          MEC may also terminate a User’s access to this Site or the Services
          found at this Site if MEC has reason to believe the User is a repeat
          offender.
        </>
      ),
    },
    {
      textno: "",
      text: (
        <>
          If MEC terminates your access to this Site or the Services found at
          this Site, MEC may, in its sole and absolute discretion, remove and
          destroy any data and files stored by you on its servers.
        </>
      ),
    },
  ];
  const term9data = [
    {
      textno: "9.1",
      text: (
        <>
          MEC expressly reserves the right to deny, cancel, terminate, suspend,
          lock, or modify access to (or control of) any Account or Services for
          any reason (as determined by MEC in its sole and absolute discretion),
          including but not limited to the following:
        </>
      ),
      textano: "a)",
      texta: (
        <>
          to correct mistakes made by MEC in offering or delivering any
          Services;
        </>
      ),
    },
    {
      textano: "b)",
      texta: (
        <>
          to protect the integrity and stability of, and correct mistakes made;
        </>
      ),
    },
    {
      textano: "c)",
      texta: (
        <>
          to assist with our fraud and abuse detection and prevention efforts;
        </>
      ),
    },
    {
      textano: "d)",
      texta: <>to comply with court orders against you;</>,
    },
    {
      textano: "e)",
      texta: (
        <>
          to comply with requests of law enforcement, including subpoena
          requests;
        </>
      ),
    },
    {
      textano: "f)",
      texta: <>to comply with any dispute resolution process;</>,
    },
    {
      textano: "g)",
      texta: (
        <>
          to defend any legal action or threatened legal action without
          consideration for whether such legal action or threatened legal action
          is eventually determined to be with or without merit; or
        </>
      ),
    },
    {
      textano: "h)",
      texta: (
        <>
          to avoid any civil or criminal liability on the part of MEC, its
          officers, directors, employees and agents, as well as MEC’s
          affiliates, including, but not limited to, instances where you have
          sued or threatened to sue MEC.
        </>
      ),
    },
    {
      textno: "9.2",
      text: (
        <>
          MEC expressly reserves the right to terminate, without notice to you,
          any and all Services where, in MEC's sole discretion, you are
          harassing or threatening MEC/or any of MEC's employees.
        </>
      ),
    },
  ];
  const term10data = [
    {
      textno: "10.1",
      text: (
        <>
          No Spam. We do not tolerate the transmission of spam. We monitor all
          traffic to and from our web servers for indications of spamming.
          Customers suspected to be using our products and services for the
          purpose of sending spam are fully investigated. If we determine there
          is a problem with spam, we will take the appropriate action to resolve
          the situation.
        </>
      ),
    },
    {
      textno: "10.2",
      text: (
        <>
          We define spam as the sending of Unsolicited Commercial Email (UCE),
          Unsolicited Bulk Email (UBE) or Unsolicited Facsimiles (Fax), which is
          email or facsimile sent to recipients as an advertisement or
          otherwise, without first obtaining prior confirmed consent to receive
          these communications. This can include, but is not limited to, the
          following:
        </>
      ),
      textano: "a)",
      texta: (
        <>
          Email Messages, Newsgroup postings, Windows system messages, Pop-up
          messages (aka "adware" or "spyware" messages), Instant messages (using
          AOL, MSN, Yahoo or other instant messenger programs), Online chat room
          advertisements, Guestbook or Website Forum postings, Facsimile
          Solicitations or Text/SMS Messages.
        </>
      ),
    },
    {
      textno: "10.3",
      text: (
        <>
          We will not allow our servers and services to be used for the purposes
          described above. In order to use our products and services, you must
          not only abide by all applicable laws and regulations but you must
          also abide by this no spam policy.
        </>
      ),
    },
    {
      textno: "10.4",
      text: (
        <>
          Commercial advertising and/or bulk emails or faxes may only be sent to
          recipients who have “opted-in” to receive messages.
        </>
      ),
    },
    {
      textno: "10.5",
      text: (
        <>
          They must include a legitimate return address and reply-to address,
          the sender's physical address, and an opt-out method in the footer of
          the email or fax.
        </>
      ),
    },
    {
      textno: "10.6",
      text: (
        <>
          Upon request by us, conclusive proof of opt-in may be required for an
          email address or fax number.
        </>
      ),
    },
    {
      textno: "10.7",
      text: (
        <>
          If we determine the services in question are being used in association
          with spam, we will re-direct, suspend, or cancel any web site hosting,
          domain registration, email boxes or other applicable services until
          customer responds.
        </>
      ),
    },
    {
      textno: "10.8",
      text: (
        <>
          The registrant or customer will be required to respond by email to us
          stating that they will cease to send spam and/or have spam sent on
          their behalf. In the event we determine the abuse has not stopped
          after services have been restored the first time, we may terminate the
          email in question.
        </>
      ),
    },
    {
      textno: "10.9",
      text: (
        <>
          We encourage all customers and recipients of email generated from our
          products and services to report suspected spam. Suspected abuse can be
          reported to <a href="policy@onewayx.com">policy@onewayx.com</a>
        </>
      ),
    },
    {
      textno: "10.10",
      text: (
        <>
          Liquidated Damages. You agree that we may immediately terminate any
          Account which we believe, in our sole and absolute discretion, is
          transmitting or is otherwise connected with any spam or other
          unsolicited bulk email.
        </>
      ),
    },
  ];
  const term11data = [
    {
      textno: "11.1",
      text: (
        <>
          MEC supports the protection of intellectual property. If you would
          like to submit (i) a trademark claim for violation of a mark on which
          you hold a valid, registered trademark or service mark, or (ii) a
          copyright claim for material on which you hold a bona fide copyright,
          please refer to MEC’s Trademark and/or Copyright Infringement Policy
          referenced above and available here.
        </>
      ),
    },
    {
      textno: "11.2",
      text: (
        <>
          MEC will report and supply information to any of our suppliers who
          provide their products and Services to our side, who have their
          Intellectual property Rights infringes for breached by any customer
          using the MEC site.
        </>
      ),
    },
  ];
  const term12data = [
    {
      textno: "12.1",
      text: (
        <>
          This Site and the Services found at this Site may contain links to
          third-party websites that are not owned or controlled by MEC.
        </>
      ),
    },
    {
      textno: "12.2",
      text: (
        <>
          MEC assumes no responsibility for the content, terms and conditions,
          privacy policies, or practices of any third-party websites.
        </>
      ),
    },
    {
      textno: "12.3",
      text: (
        <>
          In addition, MEC does not censor or edit the content of any
          third-party websites.
        </>
      ),
    },
    {
      textno: "12.4",
      text: (
        <>
          By using this Site or the Services found at this Site, you expressly
          release MEC from any and all liability arising from your use of any
          third-party website. Accordingly, MEC encourages you to be aware when
          you leave this Site or the Services found at this Site and to review
          the terms and conditions, privacy policies, and other governing
          documents of each other website that you may visit.
        </>
      ),
    },
  ];
  const term13data = [
    {
      textno: "13.1",
      text: (
        <>
          You expressly acknowledge and agree that your use of this site and the
          products and Services it supplied, found at this site, shall be at
          your own risk and that this site and the products and services found
          at this site are provided on an “As is”, “As available” and “With
          Faults”.
        </>
      ),
    },
    {
      textno: "13.2",
      text: (
        <>
          MEC, its officers, directors, employees, agents and all third party
          service providers disclaim all warranties, statutory, express or
          implied including, but not limited to, any implied warranties of
          title, merchantability, witness for any particular purposed
          non-infringement.
        </>
      ),
    },
    {
      textno: "13.3",
      text: (
        <>
          MEC, its officers, directors, employees and agents make no
          representations or warranties about;
        </>
      ),
      textano: "a)",
      texta: <>The accuracy, completeness or content of this site;</>,
    },
    {
      textano: "b)",
      texta: (
        <>
          The accuracy, completeness or content of any sites linked (through
          hyperlink, banner advertising, or otherwise) to this site, and/or
        </>
      ),
    },
    {
      textano: "c)",
      texta: (
        <>
          The services found at this site or any sites linked (through
          hyperlinks, banners banner advertising or otherwise) to this site and
          MEC assumes no liability or responsibility for the same.
        </>
      ),
    },
    {
      textno: "13.4",
      text: (
        <>
          You expressly acknowledge and agreed that no oral or written
          information or advice provided by MEC, its officers, directors,
          employees or agents (including without limitation any customer service
          representatives), and any third party service providers will;
        </>
      ),
      textano: "a)",
      texta: <>constitute legal or financial advice;</>,
    },
    {
      textano: "b)",
      texta: (
        <>
          create a warranty of any kind with respect to this site or the
          products and services found at this sited users should not rely on any
          such information or advice.
        </>
      ),
    },
    {
      textano: "c)",
      texta: (
        <>
          This disclaimer of representations and warranties shall apply to the
          fullest extent permitted by law and shall survive any termination or
          expiration of this Agreement or your use of this Site or the products
          and Services found at this Site.
        </>
      ),
    },
  ];
  const term14data = [
    {
      textno: "14.1",
      text: (
        <>
          No officers, directors, employees and agents and all third party
          service providers, be liable to you or any other person or entity for
          any direct, indirect, incidental, special, punitive or consequential
          damages, whatsoever, including any that may result from;
        </>
      ),
      textano: "a)",
      texta: (
        <>the accuracy, inaccuracy, completeness or content of this site;</>
      ),
    },
    {
      textano: "b)",
      texta: (
        <>
          the accuracy, inaccuracy, completeness or content of any site linked
          (through hyperlinks, banners banner advertising or otherwise) to this
          site;
        </>
      ),
    },
    {
      textano: "c)",
      texta: (
        <>
          the products or services found at this site of any site linked
          (through hyperlinks, banners banner advertising or otherwise) to this
          site;
        </>
      ),
    },
    {
      textano: "d)",
      texta: <>personal injury or property damages of any nature whatsoever;</>,
    },
    {
      textano: "e)",
      texta: <>third party conduct of any nature whatsoever;</>,
    },
    {
      textano: "f)",
      texta: (
        <>
          any unauthorised access to or use of our servers and/or any and all
          content, personal information, financial information, or other
          information and data stored therein;
        </>
      ),
    },
    {
      textano: "g)",
      texta: (
        <>
          any interruption or cessation of services to or from this site or any
          sites link (through hyperlinks, banners banner advertising or
          otherwise) to this site;
        </>
      ),
    },
    {
      textano: "h)",
      texta: (
        <>
          any viruses, worms, bugs, trojan horses, or the like, which may be
          transmitted to or from this site or any sites (through hyperlinks,
          banners banner advertising or otherwise) to this site;
        </>
      ),
    },
    {
      textano: "i)",
      texta: (
        <>
          any user content or content that is defamatory, harassing, abusive,
          harmful to monies or any protected class, pornographic, “X-rated”,
          obscene or otherwise objectionable; and/or
        </>
      ),
    },
    {
      textano: "j)",
      texta: (
        <>
          any loss or damage or any kind incurred as a result of your use of
          this site or the products and services found at this site, whether
          based on warranty, contract, tort or any other legal or equitable
          theory and whether or not MEC is advised of the possibility of such
          damages.
        </>
      ),
    },
    {
      textno: "14.2",
      text: (
        <>
          In addition You expressly acknowledge and agree that any cause of
          action arising out of or related to this Site or the products and
          Services found at this Site must be commenced within one (1) year
          after the cause of action accrues, otherwise such cause of action
          shall be permanently barred.
        </>
      ),
    },
    {
      textno: "14.3",
      text: (
        <>
          In addition, You expressly acknowledge and agree that in no event
          shall MEC’s total aggregate liability shall exceed £100.00.
        </>
      ),
    },
    {
      textno: "14.4",
      text: (
        <>
          The foregoing limitation of liability shall apply to the fullest
          extent permitted by law and shall survive any termination or
          expiration of this Agreement or your use of this Site or the products
          and Services found at this Site.
        </>
      ),
    },
  ];
  const term15data = [
    {
      textno: "15.1",
      text: (
        <>
          You agree to protect, defend, indemnify and hold harmless MEC and its
          officers, directors, employees, agents, and third party service
          providers from and against any and all claims, demands, costs,
          expenses, losses, liabilities and damages of every kind and nature
          (including, without limitation, reasonable legal’ fees) imposed upon
          or incurred by MEC directly or indirectly arising from (i) your use of
          and access to this Site or the products and Services found at this
          Site; (ii) your violation of any provision of this Agreement or the
          policies or agreements which are incorporated herein; and/or (iii)
          your violation of any third-party right, including without limitation
          any intellectual property or other proprietary right.
        </>
      ),
    },
    {
      textno: "15.2",
      text: (
        <>
          The indemnification obligations under this section shall survive any
          termination or expiration of this Agreement or your use of this Site
          or the Services found at this Site.
        </>
      ),
    },
  ];
  const term16data = [
    {
      textno: "16.1",
      text: (
        <>
          MEC reserves the right to cease offering or providing any of the
          products or Services at any time, for any or no reason, and without
          prior notice.
        </>
      ),
    },
  ];
  const term17data = [
    {
      textno: "17.1",
      text: (
        <>
          You acknowledge and agree that your Payment Method will be charged and
          processed by Meta Experience Company Limited, or is payment service
          provider;
        </>
      ),
    },
    {
      textno: "17.2",
      text: <>GENERAL TERMS</>,
      textano: "a) ",
      texta: (
        <>
          You agree to pay any and all prices and fees due for Services
          purchased or obtained at this Site at the time you order the Services;
        </>
      ),
    },
    {
      textano: "b)",
      texta: (
        <>
          All prices and fees are non-refundable unless otherwise expressly
          noted in the Refund Policy section below.
        </>
      ),
    },
    {
      textno: "17.3",
      text: (
        <>
          MEC expressly reserves the right to change or modify its prices and
          fees at any time, and such changes or modifications shall be posted
          online at this Site and effective immediately without need for further
          notice to you.
        </>
      ),
    },
    {
      textno: "17.4",
      text: (
        <>
          Except as prohibited in any product-specific agreement, you may pay
          for Services by utilising any of the following “Payment Methods”: (i)
          by providing a valid credit card, (ii) by using PayPal (as defined
          below), each a “Payment Method”.
        </>
      ),
    },
    {
      textno: "17.5",
      text: (
        <>
          Confirmation of that order will be sent to the email address on file
          for your Account. If you leave Your Payment Method on file it must be
          kept valid and updated from time to time.
        </>
      ),
    },
    {
      textno: "17.6",
      text: (
        <>
          You acknowledge and agree that where refunds are issued to your
          Payment Method, MEC's issuance of a refund receipt is only
          confirmation that MEC has submitted your refund to the Payment Method
          charged at the time of the original sale, and that MEC has absolutely
          no control over when the refund will be applied towards your Payment
          Method’s available balance.
        </>
      ),
    },
    {
      textno: "17.7",
      text: (
        <>
          You further acknowledge and agree that the payment provider and/or
          individual issuing bank associated with your Payment Method establish
          and regulate the time frames for posting your refund, and that such
          refund posting time frames may range from five (5) business days to a
          full billing cycle, or longer.
        </>
      ),
    },
    {
      textno: "17.8",
      text: (
        <>
          In the event a refund is issued to your Payment Method and the payment
          provider, payment processor or individual issuing bank associated with
          your Payment Method imposes any limitations on refunds, including but
          not limited to, limitations as to the timing of the refund or the
          number of refunds allowed, then MEC, ihas no liability in respect of
          any non repaid re-funds.
        </>
      ),
    },
    {
      textno: "17.9",
      text: (
        <>
          You acknowledge and agree that it is your sole responsibility to
          modify and maintain your Account settings, including but not limited
          to (i) ensuring your associated Payment Method(s) are current and
          valid. Further, you acknowledge and agree that your failure to do so,
          may result in the interruption or loss of Services, and MEC shall not
          be liable to you or any third party regarding the same.
        </>
      ),
    },
    {
      textno: "17.10",
      text: (
        <>
          Refund Policy: Products and Services available for refunds are
          described here (“Refund Policy”).
        </>
      ),
    },
    {
      textno: "17.11",
      text: (
        <>
          For products and services eligible for a refund, you may request a
          full refund within fourteen (14) days of purchase (“Refund Period”),
          please know and understand you consumer rights under the Consumer
          Rights Act 2013. Goods may be returned providing they are in their
          original packaging and in the same condition as when purchased. As a
          consumer, you have legal rights in relation to products that are
          faulty or not as described. Advice about your legal rights is
          available from your local Citizens' Advice Bureau or Trading Standards
          office. Nothing in these Terms and Conditions will affect these legal
          rights. The products sold by the Partners are supplied for your
          domestic and private use only. You agree that you will not use the
          products for any commercial, business or re-sale purposes. You further
          agree that you will not export, reexport, or otherwise transfer the
          products to countries or territories that are the target of
          comprehensive embargoes or sanctions or to parties identified on the
          U.S. Treasury Department’s List of Specially Designated Nationals and
          Blocked Persons List or the E.U.’s Consolidated Financial Sanctions
          List. Neither we nor the Partners have any liability to you for any
          loss of profit, loss of business, interruption of business, or loss of
          business opportunity.
        </>
      ),
    },
    {
      textno: "17.12",
      text: <>REFUNDS AND RETURNS</>,
      textano: "a)",
      texta: (
        <>
          The User must refer to the Refunds and Returns policy of the Product
          or Services supplied, each Product or Service Provider displays their
          Returns and Refund policy on each offer made available through the
          site to the User.
        </>
      ),
    },
  ];
  const term18data = [
    {
      textno: "18.1",
      text: (
        <>
          This Agreement shall be binding upon and inure to the benefit of the
          parties hereto and their respective heirs, successors and assigns.
        </>
      ),
    },
  ];
  const term19data = [
    {
      textno: "19.1",
      text: (
        <>
          Nothing in this Agreement shall be deemed to confer any third-party
          rights or benefits. The Contract (Rights of Third Parties) Act 1999
          does not apply.
        </>
      ),
    },
  ];
  const term20data = [
    {
      textno: "20.1",
      text: (
        <>
          MEC makes no representation or warranty that the content available on
          this Site or the Services found at this Site are appropriate in every
          country or jurisdiction, and access to this Site or the Services found
          at this Site from countries or jurisdictions where its content is
          illegal is prohibited. Users who choose to access this Site or the
          Services found at this Site are responsible for compliance with all
          local laws, rules and regulations.
        </>
      ),
    },
  ];
  const term21data = [
    {
      textno: "21.1",
      text: (
        <>
          The titles and headings of this Agreement are for convenience and ease
          of reference only and shall not be utilised in any way to construe or
          interpret the agreement of the parties as otherwise set forth herein.
          Each covenant and agreement in this Agreement shall be construed for
          all purposes to be a separate and independent covenant or agreement.
          If a court of competent jurisdiction holds any provision (or portion
          of a provision) of this Agreement to be illegal, invalid, or otherwise
          unenforceable, the remaining provisions (or portions of provisions) of
          this Agreement shall not be affected thereby and shall be found to be
          valid and enforceable to the fullest extent permitted by law.
        </>
      ),
    },
  ];
  const term22data = [
    {
      textno: "22.1",
      text: (
        <>
          If you have any questions about this Agreement, please contact us by
          email or regular mail at the following address: Meta Experience
          Company Limited, registered address 86-90 Paul Street, London, EC2A
          4NE and hello@onewayx.com
        </>
      ),
    },
  ];
  const term23data = [
    {
      textno: "23.1",
      text: (
        <>
          If a dispute arises in relation to this Contract, the parties will
          attempt to settle it by negotiation between their respective
          authorised representatives. If the Parties have not settled the
          dispute by the means of negotiations, within 14 (fourteen) days the
          Parties agree that any dispute, claim or controversy arising out of or
          in connection with this contract or breach, termination, enforcement,
          interpretation, or validity thereof, or use of the Services
          (Collectively “Disputes”) shall be submitted to arbitration and will
          be settled, by arbitration, such settlement shall be binding upon each
          party. If the Parties do not agree upon an Arbitrator, either Party
          may request a nomination from an independent Arbitration Service, such
          as CEDR. It is agreed that both Parties retain the right to seek
          injunctive or other equitable relief in a court of competent
          jurisdiction to prevent the actual or threatened infringement,
          misappropriation or violation of that Parties rights.
        </>
      ),
    },
  ];
  const term24data = [
    {
      textno: "24.1",
      text: (
        <>
          All notices, requests, demands and other communications hereunder must
          be in writing and will be deemed given (a) if delivered personally, on
          the date given, (b) if sent by facsimile transmission, on the in
          writing and date transmitted if the transmission is confirmed in good
          order by the transmitting machine, (c) if delivered by a courier
          express delivery service, on the date of delivery; (d) if by certified
          or registered mail, postage prepaid, return receipt requested; (e)
          confirmed email delivery, three (3) days after mailing, (in each case)
          to the applicable party at the addresses in the introductory paragraph
          of this Agreement, or at such other addresses as such party may
          designate by written notice in the manner aforesaid given at least
          thirty (30) days prior to the effective date of such change.
        </>
      ),
    },
  ];
  const term25data = [
    {
      textno: "25.1",
      text: (
        <>
          Any clause which by its content is intended to survive termination of
          this Agreement, shall do so, howsoever this Agreement is terminated.
        </>
      ),
    },
  ];
  const term26data = [
    {
      textno: "26.1",
      text: (
        <>
          ENTIRE AGREEMENT -This entire Agreement and any other terms referred
          to within it contains the entire agreement between the parties
          relating to the subject matter hereof and supersedes any and all prior
          agreements or understandings, written or oral, between the parties
          related to the subject matter hereof. No modification of this
          Agreement shall be valid unless made in writing and signed by MEC.
        </>
      ),
    },
    {
      textno: "26.2",
      text: (
        <>
          ASSIGNMENT - This Agreement shall be binding upon and inure to the
          benefit of Assemble You and MEC. The Affiliate may not assign or
          transfer, by operation of law or otherwise, any of its rights under
          this Agreement to any third party, or transfer any of the license
          rights granted hereunder, without the prior written consent of MEC.
        </>
      ),
    },
    {
      textno: "26.3",
      text: (
        <>
          Any attempted assignment or transfer in violation of the foregoing
          will be void.
        </>
      ),
    },
    {
      textno: "26.4",
      text: (
        <>
          MEC may freely assign this Agreement, or subcontract or otherwise
          delegate its obligations hereunder, in whole or in part, to any third
          party, provided that such third party assignee agrees in writing to be
          bound by the terms hereof.
        </>
      ),
    },
    {
      textno: "26.5",
      text: (
        <>
          WAIVER - The waiver by either party of any breach or failure to
          enforce any of the terms and conditions of this Agreement at any time
          shall not in any way affect, limit or waive such Party’s right
          thereafter to enforce and compel strict compliance with every term and
          condition of this Agreement.
        </>
      ),
    },
    {
      textno: "26.6",
      text: (
        <>
          FORCE MAJEURE - ; MEC shall not bear any liability for any failure or
          delay in the performance of its obligations under this Contract if
          such delay or failure to perform is due to any Force Majeure, for the
          purpose of this Contract Force Majeure shall be defined as;
        </>
      ),
      textano: "a)",
      texta: (
        <>
          any act, omissions, cause or circumstance beyond the reasonable
          control of MEC, this to include without any limitations; Acts of God,
          War, National Emergency, protests or rebellion, civil commotion, riots
          or strikes and any form of industrial dispute, ( whether or not
          involving either parties work force ), earthquake, flood, drought,
          epidemic, pandemic, fire, explosion, act of terrorism, or any other
          act ordered by any government, council or constituted body.
        </>
      ),
    },
  ];
  const term27data = [
    {
      textno: "27.1",
      text: (
        <>
          These Terms shall be governed and construed in accordance with the
          laws of England and Wales.
        </>
      ),
    },
    {
      textno: "27.2",
      text: (
        <>
          These Terms and Conditions and any contract made in accordance with
          them will be subject to and construed in accordance with the Laws of
          England and Wales and any Party to them will submit to the exclusive
          Jurisdiction of the Courts of England and Wales.
        </>
      ),
    },
  ];
  return (
    <Wrapper>
      <Navbar />
      <MainBox>
        <h1 className="first-heading2">terms and conditions agreement</h1>
        {termdata.map((item, index) => {
          const { heading, text } = item;
          return (
            <TextBox key={index}>
              <div>
                <p className="heading-text">{heading}</p>
                <p className="policy-text">{text}</p>
              </div>
            </TextBox>
          );
        })}
        <p className="heading-text">OVERVIEW </p>
        {term1data.map((item, index) => {
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
        <p className="heading-text">ELIGIBILITY; AUTHORITY </p>
        {term2data.map((item, index) => {
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
        <p className="heading-text">ACCOUNTS; TRANSFER OF DATA ABROAD </p>
        {term3data.map((item, index) => {
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
        <p className="heading-text">AVAILABILITY OF WEBSITE/SERVICES </p>
        {term4data.map((item, index) => {
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
        <p className="heading-text">GENERAL RULES OF CONDUCT </p>
        {term5data.map((item, index) => {
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
          YOUR USE OF MEC CONTENT AND USER CONTENT{" "}
        </p>
        {term6data.map((item, index) => {
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
        <p className="heading-text"> MEC USE OF USER CONTENT</p>
        {term7data.map((item, index) => {
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
          {" "}
          MONITORING OF CONTENT; ACCOUNT TERMINATION POLICY
        </p>
        {term8data.map((item, index) => {
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
        <p className="heading-text"> ADDITIONAL RESERVATION OF RIGHTS</p>
        {term9data.map((item, index) => {
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
        <p className="heading-text"> NO SPAM; LIQUIDATED DAMAGES</p>
        {term10data.map((item, index) => {
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
        <p className="heading-text"> TRADEMARK AND/OR COPYRIGHT CLAIMS</p>
        {term11data.map((item, index) => {
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
        <p className="heading-text"> LINKS TO THIRD-PARTY WEBSITES</p>
        {term12data.map((item, index) => {
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
          {" "}
          DISCLAIMER OF REPRESENTATIONS AND WARRANTIES
        </p>
        {term13data.map((item, index) => {
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
        <p className="heading-text"> LIMITATION OF LIABILITY</p>
        {term14data.map((item, index) => {
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
        <p className="heading-text"> INDEMNITY</p>
        {term15data.map((item, index) => {
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
        <p className="heading-text"> DISCONTINUED SERVICES</p>
        {term16data.map((item, index) => {
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
        <p className="heading-text"> FEES AND PAYMENTS</p>
        {term17data.map((item, index) => {
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
        <p className="heading-text"> SUCCESSORS AND ASSIGNS</p>
        {term18data.map((item, index) => {
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
        <p className="heading-text"> NO THIRD-PARTY BENEFICIARIES</p>
        {term19data.map((item, index) => {
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
        <p className="heading-text"> COMPLIANCE WITH LOCAL LAWS</p>
        {term20data.map((item, index) => {
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
          {" "}
          TITLES AND HEADINGS; INDEPENDENT COVENANTS; SEVER-ABILITY
        </p>
        {term21data.map((item, index) => {
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
        <p className="heading-text"> CONTACT INFORMATION</p>

        {term22data.map((item, index) => {
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
        <p className="heading-text"> DISPUTE RESOLUTION </p>

        {term23data.map((item, index) => {
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
        <p className="heading-text"> NOTICES </p>

        {term24data.map((item, index) => {
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
        <p className="heading-text"> SURVIVAL </p>

        {term25data.map((item, index) => {
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
        <p className="heading-text"> GENERAL TERMS</p>

        {term26data.map((item, index) => {
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
        <p className="heading-text"> LAW AND JURISDICTION</p>

        {term27data.map((item, index) => {
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
        <p className="last-text">Company Information - Meta Experience Company LTD registered number 14150721, registered office 86-90 Paul Street, London, EC2A 4NE.
</p>
      </MainBox>
    </Wrapper>
  );
};
export default TermsConditions;
