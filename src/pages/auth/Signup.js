import Header from '../../components/Header';
import Signup from '../../components/Signup';

export default function SignupPage() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 shadow-lg shadow-[#b8b9b9] p-11 rounded-xl border border-slate-300">
        <Header
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
        />
        <Signup />
      </div>
    </div>
  );
}
