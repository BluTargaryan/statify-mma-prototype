import React from 'react'
import { notoSerif } from '@/app/utils'

const TAndCs = () => {
  return (
    <main className='w-full flex flex-col py-16 gap-16 border-b border-gray-200
    md:py-20 md:gap-24
    xl:gap-32 xl:w-4/5 xl:mx-auto
    '>
      <section className='flex flex-col gap-6 items-center md:gap-16'>
        <h1 className='text-3xl font-bold font-noto text-center md:text-4xl'>Terms and Conditions</h1>
        <p>Welcome to StatifyMMA! By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully. If you do not agree to these terms, you should not use this site.</p>
        
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>1. Usage of Content</h2>
            <p>Users are allowed to share or reproduce content from StatifyMMA only if it is transformed under fair use and not copied directly. Sharing content is permitted for the purposes of promoting StatifyMMA.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>2. User Conduct</h2>
            <p>Users must adhere to the following rules of conduct on StatifyMMA:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Stalking, harassing, menacing, or threatening any other user or encouraging such behavior is prohibited.</li>
              <li>Using the site for any illegal gambling or wagering on sporting events is prohibited.</li>
              <li>Sharing, posting, or linking to lewd, pornographic, sexually explicit, or degrading material is prohibited.</li>
              <li>Discussing or promoting any form of child exploitation or related topics is prohibited.</li>
              <li>Sharing fraudulent, deceptive, libelous, or defamatory content is prohibited.</li>
              <li>Infringing on any intellectual property rights is prohibited.</li>
              <li>Impersonating any person, including public figures or other users, is prohibited.</li>
              <li>Distributing software viruses or other harmful code is prohibited.</li>
              <li>Unauthorized access to nonpublic portions of the site or attempting to modify any source code is prohibited.</li>
              <li>Using bots, data scraping, or password mining on the site is prohibited.</li>
              <li>Engaging in any conduct that would be deemed tortious or criminal is prohibited.</li>
              <li>Any conduct prohibited by our Terms of Use is also prohibited.</li>
            </ul>
            <p>We have a moderation policy for comments and user interactions, which is subject to change as needed.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>3. Privacy</h2>
            <p>We collect basic user data as outlined in our Privacy Policy, which can be found in PRIVACY POLICY.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>4. Third-Party Links and Content</h2>
            <p>Our blog includes links to third-party websites and content. StatifyMMA does not endorse any third-party link except where expressly stated. We do not warrant or guarantee the correctness, accuracy, reliability, or completeness of any information contained on the site, including any factual or statistical assertions.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>5. Disclaimers and Limitation of Liability</h2>
            <p>StatifyMMA provides the information on this site as a service to the public and other website owners. We do not warrant or guarantee the correctness, accuracy, reliability, or completeness of any information contained on the site. We are not liable for any errors or omissions in the content provided.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>6. Changes to Terms</h2>
            <p>We reserve the right to update these terms and conditions at our discretion. Users will be notified of changes to the terms and conditions on this page. We recommend reviewing this page periodically to stay informed of any changes.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>7. Governing Law</h2>
            <p>These terms and conditions are governed by the laws of the Philippines. By using this site, you agree to submit to the jurisdiction of the courts located in the Philippines for any disputes arising out of or relating to these terms and conditions or your use of this site.</p>
          </div>

          <div className='flex flex-col gap-3 mt-6'>
            <p>If you have any questions about these Terms and Conditions, please contact us at hello@statifymma.com.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TAndCs