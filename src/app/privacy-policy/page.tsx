import React from 'react'
import { notoSerif } from '@/app/utils'

const PrivacyPolicy = () => {
  return (
    <main className='w-full flex flex-col py-16 gap-16 border-b border-gray-200
    md:py-20 md:gap-24
    xl:gap-32 xl:w-4/5 xl:mx-auto
    '>
      <section className='flex flex-col gap-6 items-center md:gap-16'>
        <h1 className='text-3xl font-bold font-noto text-center md:text-4xl'>Privacy Policy</h1>
        
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>GDPR Compliance</h2>
            <p>The EU's General Data Protection Regulations (GDPR) take effect on May 25th, 2018. I agree with the spirit of these regulations and am willing to support all laws that enable internet users to remain sovereign individuals. I aspire to embrace privacy by design and, whenever possible, to not collect and store personally identifiable information. I only collect information that helps me deliver a better service and experience for you when browsing this site, reading my content, and engaging with my products.</p>
            <p>At any time, you are free to ask me to unsubscribe you from my email newsletter or request your information to be exported and sent to you for review. Just reply to the email in question and include 'GDPR' in the subject line, as well as the specifics of your request. I'm here to help.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>Information We Collect</h2>
            <p>We collect the information you provide us when you subscribe to our newsletter, leave a comment, or fill out a contact form. This information may include your name, email address, and any other personal information you choose to provide.</p>
            <p>We also collect information automatically when you visit our website, including your IP address, browser type, and device type. This information is collected through the use of cookies and similar technologies.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>How Do We Use Your Information?</h2>
            <p>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>To personalize the user's experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
              <li>To improve our website in order to better serve you.</li>
              <li>To allow us to better service you in responding to your customer service requests.</li>
              <li>To administer a contest, promotion, survey, or other site feature.</li>
            </ul>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>How Do We Protect Visitor Information?</h2>
            <p>Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible. We use regular Malware Scanning.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>Do We Use 'Cookies'?</h2>
            <p>Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.</p>
            <p>We use cookies to understand and save users' preferences for future visits and compile aggregate data about site traffic and site interaction to offer better site experiences and tools in the future.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>We Use Cookies To:</h2>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Understand and save users’ preferences for future visits.</li>
              <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future.</li>
            </ul>
            <p>We may also use trusted third-party services that track this information on our behalf. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser (like Internet Explorer) settings. Each browser is a little different, so look at your browser’s Help menu to learn the correct way to modify your cookies. If you disable cookies off, some features will be disabled. It won’t affect the users experience that make your site experience more efficient and some of our services will not function properly. However, you can still place orders via email.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>Google</h2>
            <p>Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. We may use Google AdSense Advertising on our website. Google, as a third party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>California Online Privacy Protection Act</h2>
            <p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require a person or company in the United States (and conceivably the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy.</p>
            <p>According To CalOPPA We Agree To The Following:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Users can visit our site anonymously.</li>
              <li>Once this privacy policy is created, we will add a link to it on our home page, or as a minimum on the first significant page after entering our website.</li>
              <li>Our Privacy Policy link includes the word 'Privacy', and can be easily be found on the page specified above.</li>
              <li>Users will be notified of any privacy policy changes on our Privacy Policy Page</li>
              <li>Users are able to change their personal information by emailing us</li>
            </ul>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>How Does Our Site Handle Do Not Track Signals?</h2>
            <p>We honor do not track signals and do not track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>Does Our Site Allow Third Party Behavioral Tracking?</h2>
            <p>It's also important to note that we allow third-party behavioral tracking.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>COPPA (Children Online Privacy Protection Act)</h2>
            <p>When it comes to the collection of personal information from children under 13, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, the nation's consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.</p>
            <p>We do not specifically market to children under 13.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>Fair Information Practices</h2>
            <p>The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.</p>
            <p>In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>We will notify the users via email within 7 business days.</li>
              <li>We also agree to the individual redress principle, which requires that individuals have a right to pursue legally enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or a government agency to investigate and/or prosecute non-compliance by data processors.</li>
            </ul>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>CAN SPAM Act</h2>
            <p>The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.</p>
            <p>We Collect Your Email Address In Order To:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Send information, respond to inquiries, and/or other requests or questions.</li>
              <li>Process orders and to send information and updates pertaining to orders</li>
              <li>We may also send you additional information related to your product and/or service.</li>
              <li>Market to our mailing list or continue to send emails to our clients after the original transaction has occurred</li>
            </ul>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>To Be In Accordance With CANSPAM We Agree To The Following:</h2>
            <ul className='list-disc pl-6 space-y-2'>
              <li>NOT use false, or misleading subjects or email addresses</li>
              <li>Identify the message as an advertisement in some reasonable way</li>
              <li>Include the physical address of our business or site headquarters</li>
              <li>Monitor third party email marketing services for compliance, if one is used.</li>
              <li>Honour opt-out/unsubscribe requests quickly</li>
              <li>Allow users to unsubscribe by using the link at the bottom of each email</li>
            </ul>
            <p>If at any time you would like to unsubscribe from receiving future emails, you can email us at or follow the instructions at the bottom of each email, and we will promptly remove you from ALL correspondence.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>Agreeing To Terms</h2>
            <p>If you do not agree to statifymma.com's privacy policy as posted here on this website, please do not consent to the setting of cookies and the collection and storage of your personally identifiable information.</p>
            <p>Your explicit consent indicates acceptance of this privacy policy in its entirety</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>Contacting Us</h2>
            <p>If there are any questions regarding this privacy policy you may contact us.</p>
          </div>

          <p className='text-sm text-gray-600 mt-4'>Last Updated on July 20, 2024</p>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy