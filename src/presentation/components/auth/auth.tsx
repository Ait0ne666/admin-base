import { Formik } from "formik";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { login } from "../../../data/api/user";
import { useUser } from "../../../data/queries/user";
import { IUser } from "../../../models/user/user";
import CustomButton from "../../components/atoms/CustomButton/custom-button";
import CustomInput from "../../components/atoms/CustomInput/customInput";
import * as yup from 'yup'
import { useCustomToast } from "../../../hooks/toast";



const validationSchema = yup.object().shape({
    login : yup.string().trim().email("Некорректный email").required('Обязательное поле'),
    password: yup
        .string()
        .trim()
        .required('Обязательное поле'),
});



const INITIAL_VALUES = {
  login: "",
  password: "",
};

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const showToast = useCustomToast();
  const queryClient = useQueryClient();
  const { isLoading } = useUser();

  const handleAuth = async (values: typeof INITIAL_VALUES) => {
    if (loading) return;
    setLoading(true);

    const result = await login(values.login, values.password);
    if (typeof result === "string") {
      showToast("", "error", result);
      setLoading(false);
    } else {
      console.log("res");
      queryClient.invalidateQueries("user", { exact: true });
    }
  };

  



  

  return (
      <div className="flex flex-col items-center rounded-xl shadow-xl bg-white p-7 w-full max-w-md">
        <img src='/logo.svg' className="w-[7.5rem] mb-10"/>
        
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={handleAuth}
          validateOnBlur={true}
          validateOnChange={false}

          validationSchema={validationSchema}
          isInitialValid={false}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            errors,
            setFieldValue,
            isValid,
            setFieldError,
            validateField,
            
          }) => {

                const hasErrors = (errors.login || errors.password) ? true : false
              return (
            <form className="w-full" onSubmit={handleSubmit}>
              <CustomInput
                
                type="email"
                name="login"
                placeholder="Ваш email"
                value={values.login}
                onChange={(value) => setFieldValue("login", value)}
                error={errors.login}
                wrapperStyles={{
                    marginBottom: '1.25rem'
                }}
                resetError={() => setFieldError("login", '')}
                onBlur={() => validateField('login')}
              />
              <CustomInput
          
                placeholder="Ваш пароль"
                name="password"
                type={"password"}
                value={values.password}
                onChange={(value) => setFieldValue("password", value)}
                error={errors.password}
                wrapperStyles={{
                    marginBottom: '2.5rem'
                }}
                resetError={() => setFieldError("password", '')}
                onBlur={() => validateField('password')}
              />
              <CustomButton  type="submit" loading={loading || isLoading } title='Войти' disabled={hasErrors || values.login === '' || values.password === ''}/>
              
            </form>
          )}}
        </Formik>
      </div>
  );
};

export default Auth;