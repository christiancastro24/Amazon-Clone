import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { useHistory, Redirect } from "react-router-dom"
import amazonLogo from "../../assets/amazonLogo.png"
import { Container, Footer, Form, Header } from "./styles";
import { Link } from "react-router-dom"
import { useAuthentication } from "../../providers/Authentication";
import { api } from "../../services";
import { toast } from "react-hot-toast"

export const RegisterPage = () => {

    const history = useHistory();

    const { authenticated } = useAuthentication();

    const formSchema = yup.object().shape({
        username: yup.string().required("Campo obrigatório").max(12, null),
        email: yup.string().email("Campo inválido").required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "Os campos precisam ser iguais")
    })

    const { handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubFunc = (data) => {
        data.cep =  ""
        data.logradouro = ""
        data.bairro = ""
        data.localidade = ""
        data.uf = ""
         api.post('/register', data)
        .then(_ => {
            toast.success("Cadastro concluído", {
                style: {
                    backgroundColor: "#007600",
                    color: "#fff",
                },
            }); 
            history.push("/login")
        })
        .catch(_ => toast.error("E-mail ou usuário já cadastrado", {
            style: {
                backgroundColor: "#f34f74",
                color: "#fff",
                fontWeight: "bold",
            },
        }))
    }


      if(authenticated) {
        return <Redirect to={"/"} />
    }


    return (
        <Container>
           <Header>
               <img src={amazonLogo} alt="LOGO-AMAZON" />
           </Header> 

            <Form onSubmit={handleSubmit(onSubFunc)}>
                <h1>Criar Conta</h1>

                <label>Usuário</label>
                <input type="text" {...register("username")}/>

                <label>E-mail</label>
                <input type="text" {...register("email")}/>

                <label>Senha</label>
                <input type="password" {...register("password")} />

                <label>Insira a senha nova mais uma vez</label>
                <input type="password" {...register("confirmPassword")}/>
                {errors.confirmPassword && errors.confirmPassword.message}

                <div>
                    <button type="submit">Continuar</button>
                </div>

                <div className="about-p">
                    <p>
                    Ao criar uma conta, você concorda com as <span>Condições de Uso da Amazon</span>. Por favor verifique a <span>Notificação de Privacidade, Notificação de Cookies</span> e a  <span>Notificação de Anúncios Baseados em Interesse.</span>
                    </p>
                    
                    <div className="hr"></div>
                </div>

                <p className="account-exist">Você já tem uma conta? <Link to={"/login"}>Fazer Login</Link></p>
            </Form>

            <Footer>
                <span>Condições de uso</span>
                <span>Política de Privacidade</span>
                <span>Ajuda</span>
                <span>Cookies</span>
                <span>Anúncios baseados em interesses</span> 
                <p>2012 - 2021, Amazon.com, Inc. ou suas afiliadas</p> 
            </Footer>
        </Container>
    )
}