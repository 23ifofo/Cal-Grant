import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import universities from '../../config/universities.json';

const CalGrantInfo = () => {
  const navigate = useNavigate();
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const publicUniversities = Object.entries(universities.universities)
    .filter(([, config]) => config.type === 'public')
    .map(([slug, config]) => ({ slug, ...config }));

  const privateUniversities = Object.entries(universities.universities)
    .filter(([, config]) => config.type === 'private')
    .map(([slug, config]) => ({ slug, ...config }));

  const handleUniversitySelect = (slug) => {
    setSelectedUniversity(slug);
    setTimeout(() => {
      navigate(`/application-form?university=${slug}&section=0`);
    }, 300);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-4 lg:mx-8 py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Cal Grant Hero Header */}
          <div className="relative mb-16">
            {/* Background Gradient Blob */}
            <div className="absolute -top-20 right-0 w-80 h-80 bg-gradient-to-br from-blue-200 to-cyan-100 rounded-full blur-3xl opacity-40 -z-10" />
            <div className="absolute top-40 -left-40 w-72 h-72 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-30 -z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Column - Logo & Branding */}
              <div className="lg:col-span-1 flex flex-col items-center lg:items-start space-y-6">
                <div className="relative w-full max-w-xs">
                  {/* Glowing background behind logo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl blur-2xl opacity-25" />
                  
                  {/* Logo with badge background */}
                  <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-2xl border border-blue-100">
                    <img src="/assets/images/calgrantlogo.svg" alt="Cal Grant Logo" className="w-full h-auto" />
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="w-full space-y-2 hidden lg:block">
                  <div className="glass-card rounded-xl p-4 bg-white/60 border border-blue-100">
                    <div className="text-2xl font-bold text-blue-900">$5,742</div>
                    <div className="text-xs text-blue-600 font-medium">Max Annual Award</div>
                  </div>
                  <div className="glass-card rounded-xl p-4 bg-white/60 border border-green-100">
                    <div className="text-2xl font-bold text-green-900">Free</div>
                    <div className="text-xs text-green-600 font-medium">No Application Fee</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Main Headline */}
                <div className="space-y-4">
                  <h1 className="heading-font text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
                    California Cal Grant
                  </h1>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                    <Icon name="Award" size={28} color="#1e40af" />
                    <div className="flex-1 h-1 bg-gradient-to-l from-blue-600 to-cyan-500 rounded-full" />
                  </div>
                  <p className="text-xl text-blue-700 font-medium">
                    Make Higher Education Affordable
                  </p>
                  <p className="text-base text-blue-600 leading-relaxed max-w-2xl">
                    Get financial aid from California to help cover tuition, fees, and living expenses at any qualifying California university. The Cal Grant program is open to eligible California residents—apply today and invest in your future.
                  </p>
                </div>

                {/* Key Features - 3 Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
                  <div className="glass-card border border-blue-200 rounded-xl p-5 bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition">
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name="CheckCircle" size={24} color="#1e40af" className="flex-shrink-0 mt-1" />
                      <h3 className="font-bold text-blue-900 text-sm">Up to 8 Semesters</h3>
                    </div>
                    <p className="text-xs text-blue-700">For eligible bachelor degree students</p>
                  </div>

                  <div className="glass-card border border-green-200 rounded-xl p-5 bg-gradient-to-br from-white to-green-50 hover:shadow-lg transition">
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name="Users" size={24} color="#15803d" className="flex-shrink-0 mt-1" />
                      <h3 className="font-bold text-green-900 text-sm">Parents & Guardians</h3>
                    </div>
                    <p className="text-xs text-green-700">Can apply on behalf of students</p>
                  </div>

                  <div className="glass-card border border-amber-200 rounded-xl p-5 bg-gradient-to-br from-white to-amber-50 hover:shadow-lg transition">
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name="DollarSign" size={24} color="#b45309" className="flex-shrink-0 mt-1" />
                      <h3 className="font-bold text-amber-900 text-sm">Living Allowance</h3>
                    </div>
                    <p className="text-xs text-amber-700">Available in freshman year with Cal Grant B</p>
                  </div>
                </div>

                {/* CTA and Quick Links */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button onClick={() => document.querySelector('#universities-section')?.scrollIntoView({ behavior: 'smooth' })} className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl transition shadow-lg">
                    Browse Universities
                  </button>
                  <button onClick={() => document.querySelector('#about-cal-grant')?.scrollIntoView({ behavior: 'smooth' })} className="flex-1 bg-white hover:bg-gray-50 text-blue-700 font-bold py-3 px-6 rounded-xl border-2 border-blue-300 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* New Ready to Apply Section */}
          <div className="space-y-10 md:space-y-16">
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="glass-card border border-blue-200 rounded-2xl p-6 md:p-8 bg-gradient-to-br from-white/90 to-blue-50/90 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">How to Get Started</h2>
                <p className="text-lg text-blue-800 mb-6 leading-relaxed">
                  <strong>Select your university from the list below</strong> and click to begin your Cal Grant scholarship application. Each university has its own application portal where you'll complete your details step by step.
                </p>
                <div className="border-t border-blue-300 pt-6 mt-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">👨‍👩‍👧</div>
                    Parents & Guardians Can Apply Too
                  </h3>
                  <p className="text-base text-blue-800 mb-4 leading-relaxed">
                    Parents or guardians can complete this application on behalf of a learner. Simply enter the student's details in the required fields and your contact information where indicated. During the final interview stage (if the application is selected for award), <strong>only the learner needs to attend to verify their details and confirm the scholarship award</strong>.
                  </p>
                  <p className="text-sm text-blue-700 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                    💬 <strong>We'll contact you via email or phone</strong> with the interview date and any information we need to confirm. This quick verification ensures the scholarship is awarded to the right person.
                  </p>
                </div>
              </div>
            </div>

            {/* Get Started CTA */}
            <div className="mt-8 text-center">
              <p className="text-lg text-blue-700 font-semibold mb-2">👇 Choose your university below to get started 👇</p>
            </div>
          </div>

          {/* About Cal Grant */}
          <div className="glass-card border border-blue-100 rounded-lg p-6 md:p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Award" size={24} color="white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-blue-900 mb-2">
                  About Cal Grant
                </h2>
                <p className="text-sm md:text-base text-blue-700">
                  The Cal Grant program is dedicated to making higher education accessible and affordable to California residents.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white/60 border-l-4 border-yellow-500 pl-4 py-3 rounded-r">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Icon name="Users" size={20} color="#1e40af" />
                    Award Coverage
                  </h3>
                  <p className="text-sm text-blue-800">
                    Cal Grant awards scholarships to eligible students annually based on qualified applicants and available funding. Your eligibility depends on meeting the established criteria and attending a qualifying institution.
                  </p>
                </div>

                <div className="bg-white/60 border-l-4 border-yellow-500 pl-4 py-3 rounded-r">
                  <h3 className="text-lg font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <Icon name="DollarSign" size={20} color="#15803d" />
                    No Application Fees
                  </h3>
                  <p className="text-sm text-green-800">
                    Cal Grant does not charge an application fee. This scholarship application is free. <strong>If anyone asks you for money to apply, it is a scam.</strong>
                  </p>
                </div>

                <div className="bg-white/60 border-l-4 border-yellow-500 pl-4 py-3 rounded-r">
                  <h3 className="text-lg font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <Icon name="AlertCircle" size={20} color="#b91c1c" />
                    Report Scams
                  </h3>
                  <p className="text-sm text-red-800">
                    Suspicious activity? Report scams or fraudulent scholarship claims to the appropriate authorities or contact support at <strong>support@calgrant.ca.gov</strong>.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/60 border-l-4 border-blue-600 pl-4 py-3 rounded-r">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Icon name="CheckCircle" size={20} color="#1e40af" />
                    Eligibility Requirements
                  </h3>
                  <ul className="text-sm text-blue-800 space-y-2 list-disc list-inside">
                    <li>U.S. citizen, eligible noncitizen, or AB 540-eligible</li>
                    <li>California resident at high school graduation</li>
                    <li>Enroll in a Cal Grant-eligible California school</li>
                    <li>Maintain at least half-time enrollment (6+ units)</li>
                    <li>Demonstrate financial need (FAFSA or CA Dream Act Application)</li>
                    <li>Maintain satisfactory academic progress</li>
                    <li>Meet U.S. Selective Service requirements (if male)</li>
                    <li>Not have earned a bachelor's degree or higher</li>
                    <li>Cannot owe state/federal grant refunds or have defaulted student loans</li>
                    <li>Not currently incarcerated</li>
                  </ul>
                </div>

                <div className="bg-white/60 border-l-4 border-blue-600 pl-4 py-3 rounded-r">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Icon name="Clock" size={20} color="#1e40af" />
                    What Happens Next
                  </h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li><strong>Submit:</strong> Complete your application by the deadline</li>
                    <li><strong>GPA Verification:</strong> Verify your high school GPA (due March 2 of senior year, if not already verified)</li>
                    <li><strong>Application Review:</strong> California Student Aid Commission (CSAC) reviews your application</li>
                    <li><strong>Award Notification:</strong> If selected, you'll receive an award letter via email</li>
                    <li><strong>Interview (if needed):</strong> Selected applicants may be contacted for a brief interview to verify eligibility</li>
                    <li><strong>Disbursement:</strong> Funds distributed by your university after receipt from CSAC</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Cal Grant Award Details */}
          <div className="glass-card border border-amber-100 rounded-lg p-6 md:p-8 shadow-md">
            <h3 className="text-lg font-semibold text-amber-900 mb-4 flex items-center gap-2">
              <Icon name="AlertCircle" size={20} color="#b45309" />
              Important Award Information
            </h3>
            <div className="space-y-4 text-sm text-amber-800">
              <div>
                <p className="font-semibold mb-1">Enrollment & Pro-Rated Awards:</p>
                <p>Your Cal Grant award is pro-rated based on enrollment. Full awards require 12+ units per quarter. If you enroll in 9–11 units, you receive 75% of the award; 6–8 units receive 50%. You must maintain at least half-time enrollment (6+ units) to remain eligible.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Disbursement Timing:</p>
                <p>Your university may disburse Cal Grant funds after they receive payment from the California Student Aid Commission (CSAC). If the state is slow to transfer funds, disbursement may be delayed by a few weeks.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Award Caps:</p>
                <p>Your total Cal Grant cannot exceed your school's cost of attendance when combined with other aid designated to pay tuition (such as a State University Grant, fee waivers, or certain veteran benefits).</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Funding Dependent on State Budget:</p>
                <p>Cal Grant awards and disbursement amounts may be affected by action of the Governor and the California State Legislature. In some years, awards may be reduced or delayed due to state budget constraints.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="heading-font text-2xl md:text-3xl font-bold text-[#072f5f] mb-2">
                Types of Cal Grants
              </h2>
              <p className="text-base text-[#0b4a7a]">
                Cal Grants are available in different types to meet the needs of eligible students. Learn about each option below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cal Grant A */}
              <div className="glass-card border border-green-200 rounded-lg p-6 md:p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-green-900">Cal Grant A</h3>
                    <p className="text-sm text-green-700">Tuition & Fee Coverage</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-green-800">
                  <div>
                    <p className="font-semibold mb-1">Award Coverage:</p>
                    <p>Covers CSU Basic Tuition and qualifying institutional fees at eligible California schools.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Duration:</p>
                    <p>Available for up to 8 semesters for bachelor's degree students.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Eligibility GPA:</p>
                    <p>Minimum 3.0 GPA on a 4.0 scale at high school graduation.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Annual Award Amount:</p>
                    <p className="text-lg font-bold text-green-600">$5,742 per year (quarterly: $1,914 full-time)</p>
                  </div>
                  <p className="text-xs text-green-700 pt-2 border-t border-green-200">
                    Amounts are prorated based on enrollment (75% for 9–11 units, 50% for 6–8 units).
                  </p>
                </div>
              </div>

              {/* Cal Grant B */}
              <div className="glass-card border border-purple-200 rounded-lg p-6 md:p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-purple-900">Cal Grant B</h3>
                    <p className="text-sm text-purple-700">Living Allowance & Tuition</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-purple-800">
                  <div>
                    <p className="font-semibold mb-1">Award Coverage:</p>
                    <p><strong>Freshman Year:</strong> Living allowance for books, supplies, and living expenses.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Sophomore+:</p>
                    <p>Tuition & fees PLUS continued living allowance support.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Eligibility GPA:</p>
                    <p>Minimum 2.0 GPA on a 4.0 scale at high school graduation.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Annual Living Allowance:</p>
                    <p className="text-lg font-bold text-purple-600">Up to $1,672 per year</p>
                  </div>
                  <p className="text-xs text-purple-700 pt-2 border-t border-purple-200">
                    Designed for low-income students. Living allowance amounts: $552 quarterly (full-time), $414 (9–11 units), $276 (6–8 units).
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card border border-blue-100 rounded-lg p-6 md:p-8 bg-white/60">
              <p className="text-sm text-blue-800 mb-3">
                <strong>Award Verification & Disbursement:</strong> Cal Grant funds are disbursed by your university based on Cal Student Aid Commission funding. Disbursement may be delayed if the state has not yet transferred funds. Amounts may vary slightly based on your institution and enrollment status.
              </p>
              <p className="text-sm text-blue-800">
                <strong>Award Cap:</strong> Your total Cal Grant cannot exceed your school's cost of attendance when combined with other aid designated for tuition (such as State University Grant, fee waivers, or veteran benefits).
              </p>
            </div>
          </div>

          {/* Representative/Guardian Notice */}
          <div className="glass-card border border-yellow-200 rounded-lg p-6 md:p-8 shadow-md">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} color="#f59e0b" className="flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Applying on Behalf of a Learner?</h3>
                <p className="text-sm text-amber-800 mb-2">
                  Parents, guardians, or authorized representatives can complete this application using the learner's information. Fill in the learner's details in the application fields, and use your own contact information in the emergency contact section where appropriate.
                </p>
                <ul className="text-sm text-amber-800 list-disc list-inside space-y-1">
                  <li>Only one application per learner is allowed</li>
                  <li><strong>Only the learner</strong> is required to attend the reporting date/interview if awarded (date will be in the confirmation email)</li>
                  <li>Only information that appears inconsistent or suspicious will be reviewed during the reporting date</li>
                  <li>You can fill in your own information in appropriate fields (e.g., emergency contact, phone number)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* University Selection */}
            <div className="space-y-6">
              <div>
                <h2 className="heading-font text-2xl md:text-3xl font-bold text-[#072f5f] mb-2">
                  Select Your University
                </h2>
                <p className="text-base text-[#0b4a7a]">
                  Choose the university you plan to attend or are currently attending. Click to begin your scholarship application.
                </p>
              </div>

            {/* Public Universities */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                <Icon name="Building2" size={20} color="#1e40af" />
                Public Universities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {publicUniversities.map((uni) => (
                  <button
                    key={uni.slug}
                    onClick={() => handleUniversitySelect(uni.slug)}
                    disabled={selectedUniversity === uni.slug}
                    className={`p-5 rounded-xl border text-left smooth-transition transform hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-blue-300 ${
                      selectedUniversity === uni.slug
                        ? 'border-blue-600 bg-white/80 shadow-md'
                        : 'border-gray-200 bg-white'
                    }`}>
                    <p className="font-semibold text-[#0b3b5c] text-sm md:text-base">
                      {uni.name}
                    </p>
                    <p className="text-xs text-[#3b6b89] mt-1">
                      {uni.location}
                    </p>
                    {selectedUniversity === uni.slug && (
                      <div className="flex items-center gap-2 mt-3 text-blue-600 font-semibold">
                        <Icon name="Check" size={16} />
                        <span className="text-xs">Selected</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Private Universities (LAICU) */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                <Icon name="Building" size={20} color="#1e40af" />
                Qualifying Private Universities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {privateUniversities.map((uni) => (
                  <button
                    key={uni.slug}
                    onClick={() => handleUniversitySelect(uni.slug)}
                    disabled={selectedUniversity === uni.slug}
                    className={`p-5 rounded-xl border text-left smooth-transition transform hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-blue-300 ${
                      selectedUniversity === uni.slug
                        ? 'border-blue-600 bg-white/80 shadow-md'
                        : 'border-gray-200 bg-white'
                    }`}>
                    <p className="font-semibold text-[#0b3b5c] text-sm md:text-base">
                      {uni.name}
                    </p>
                    <p className="text-xs text-[#3b6b89] mt-1">
                      {uni.location}
                    </p>
                    {selectedUniversity === uni.slug && (
                      <div className="flex items-center gap-2 mt-3 text-blue-600 font-semibold">
                        <Icon name="Check" size={16} />
                        <span className="text-xs">Selected</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="glass-card border border-blue-100 rounded-lg p-6 md:p-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <Icon name="HelpCircle" size={20} color="#1e40af" />
              Need Help?
            </h3>
            <p className="text-sm text-blue-800 mb-4">
              If you have questions about Cal Grant, your eligibility, or need to report suspicious activity:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded p-4 border-l-4 border-yellow-500">
                <p className="text-sm font-semibold text-blue-900 mb-1">Cal Grant Support</p>
                <p className="text-sm text-blue-700">
                  Contact your university's financial aid office for assistance with your application.
                </p>
              </div>
              <div className="bg-white rounded p-4 border-l-4 border-yellow-500">
                <p className="text-sm font-semibold text-blue-900 mb-1">Report Scams</p>
                <p className="text-sm text-blue-700">
                  Email: <strong>support@calgrant.ca.gov</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CalGrantInfo;
