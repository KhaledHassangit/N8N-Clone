import { RegisterForm } from "@/components/auth/register-form"
import { requireUnauth } from "@/lib/auth-utils";

const RegisterPage = async () => {
    await requireUnauth();
  
  return (
    <div>
        <RegisterForm/>
    </div>
  )
}

export default RegisterPage