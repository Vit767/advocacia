<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    $to = "fodavic84@gmail.com";
    $subject = "Nova mensagem de $nome";
    $headers = "From: $email";

    mail($to, $subject, $mensagem, $headers);

    // Você pode redirecionar o usuário para uma página de agradecimento após o envio
    header("agradecimento.html");
}
?>