import React from "react";
import { Container, Form } from "./style";
import Input from "../Components/input";
import Button from "../Components/button";

const Login = () => {
  const handleChange = (event) => {
    console.log("Digitando...", event.target.name, event.target.value);
  };

  return (
    <Container>
      <Form>
        <h1>Faça seu Login 👋</h1>
        <Input
          name="email"
          placeHolder="Digite o seu email"
          onChange={handleChange}
          type="email"
        />
        <Input
          name="password"
          placeHolder="Digite o sua senha"
          onChange={handleChange}
          type="password"
        />
        <Button
        />
        <div>
          <p>Não possui conta?</p>
          <a>Cadastrar</a>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
