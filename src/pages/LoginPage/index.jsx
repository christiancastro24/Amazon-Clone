import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, Redirect } from "react-router-dom"
import * as yup from "yup"
import amazonLogo from "../../assets/amazonLogo.png"
import { Container, Footer, Form, Header } from "./styles";
import { useAuthentication } from "../../providers/Authentication";
import { api } from "../../services";
import jwt_decode from "jwt-decode";
import { toast } from "react-hot-toast"

export const Login = () => {

    const history = useHistory();

    const { authenticated, setAuthenticated } = useAuthentication();

    const formSchema = yup.object().shape({
        email: yup.string().email("Campo inválido").required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório"),
        KeepMeConnected: yup.boolean().oneOf([true], "Você Deve aceitar os termos.")

    })

    const { handleSubmit, register } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubFunc = (data) => {
        console.log(data)
        api.post("/login", data)
        .then(res => {
            setAuthenticated(true)
            const { accessToken, name } = res.data
            localStorage.setItem("@token/auth", JSON.stringify(accessToken, name));
            localStorage.setItem("@token/userId",jwt_decode(res.data.accessToken).sub);
            history.push("/")
        })
        .catch(_ => toast.error("E-mail ou senha inválidos", {
            style: {
                backgroundColor: "#f34f74",
                color: "#fff",
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
                <h1>Login</h1>

                <label>E-mail</label>
                <input type="text" {...register("email")} />

                <label>Senha</label>
                <input type="password" {...register("password")} />

                <div>
                    <input type="checkbox" {...register("KeepMeConnected")} />
                    <span className="span-KeepMeConnected">Mantenha-me conectado</span>
                </div>

                <div>
                    <button type="submit">Continuar</button>
                </div>
            </Form>

            <Footer>
                <span>Condições de uso</span>
                <span>Política de Privacidade</span>
                <span>Ajuda</span>
                <p>2012 - 2021, Amazon.com, Inc. ou suas afiliadas</p> 
            </Footer>
        </Container>
    )
}