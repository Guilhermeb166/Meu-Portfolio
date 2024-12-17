import styles from './Footer.module.css'
import { useState } from 'react'
export default function Footer(){
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [status,setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');

        try {
            const response = await fetch('http://localhost:5000/send-email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, message }),
            });
      
            if (response.ok) {
              setStatus('E-mail enviado com sucesso!');
              setEmail('');
              setMessage('');
            } else {
              setStatus('Erro ao enviar e-mail.');
            }
          } catch (error) {
            console.error(error);
            setStatus('Erro ao enviar e-mail.');
          }
        };
    return(
        <footer className={styles.footer}>
            <div>
                <h1>Entre em contato comigo</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Digite seu Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        id='message'
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                    />
                    <button type='submit'>Enviar</button>
                </form>
                <p>{status}</p>
            </div>
            <div>
                <h1>Redes Sociais</h1>
            </div>
        </footer>
    )
}