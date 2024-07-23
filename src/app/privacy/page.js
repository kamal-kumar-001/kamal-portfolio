import React from 'react';
import Link from 'next/link';
import MainLayout from '../components/MainLayout';

const PrivacyPolicy = () => {
  return (
    <MainLayout>
    <div className="min-h-screen flex flex-col justify-center items-center py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 p-10 bg-gray-900 rounded-xl shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-white">Privacy Policy</h2>
          <p className="mt-2 text-center text-lg text-gray-100">
            Effective Date: 23/07/2024
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <p className="text-gray-100 text-lg">
            Thank you for using our app. Your privacy is important to us. This privacy policy
            explains how we handle your personal data when you use our app.
          </p>
          <h3 className="text-xl font-medium text-white">1. No Data Collection</h3>
          <p className="text-gray-100 text-lg">
            Our app does not collect, store, or share any personal data. We do not ask for any
            permissions that would allow us to access sensitive information on your device.
          </p>
          <h3 className="text-xl font-medium text-white">2. Device Information</h3>
          <p className="text-gray-100 text-lg">
            We only identify the operating system (iOS or Android) to ensure the app functions
            correctly on your device. This information is not stored or shared.
          </p>
          <h3 className="text-xl font-medium text-white">3. Children’s Privacy</h3>
          <p className="text-gray-100 text-lg ">
            Our app does not target children under the age of 13. We do not knowingly collect
            personal information from children under 13. If we become aware that we have
            inadvertently received personal information from a user under the age of 13, we will
            delete such information from our records.
          </p>
          <h3 className="text-xl font-medium text-white">4. Changes to This Policy</h3>
          <p className="text-gray-100 text-lg">
            We may update this privacy policy from time to time. If we make significant changes, we
            will notify you through the app or other means. Your continued use of the app after any
            changes indicates your acceptance of the new policy.
          </p>
          <h3 className="text-xl font-medium text-white">5. Contact Us</h3>
          <p className="text-gray-100 text-lg">
            If you have any questions or concerns about our privacy policy, please  <Link className='text-blue-500' href='/contact'>Contact us</Link>.
          </p>
        </div>
      </div>
    </div>
      </MainLayout>
  );
};

export default PrivacyPolicy;
