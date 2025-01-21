import styles from './Footer.module.css'
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { useState } from 'react'
export default function Footer(){
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [status,setStatus] = useState('')
    const [charAmout,setCharAmout] = useState('')

    const handleChange = (e)=>{
        setCharAmout(e.target.value.length)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');

        try {
            const response = await fetch('https://meu-portfolio-m4qe.vercel.app/send-email', {
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
            <div className={styles.emailContainer}>
                <h1>Entre em contato comigo</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.email}>
                        <label htmlFor="email">Digite seu Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={`${styles.input} ${styles.inputEmail}`}
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                            autoComplete='off'
                        />
                    </div>
                    <div className={styles.message}>
                        <label htmlFor="message">Digite sua mensagem:</label>
                        <div>
                            <textarea
                                id='message'
                                className={`${styles.input} ${styles.inputMessage}`}
                                maxLength="250"
                                value={message}
                                onChange={(e)=>{
                                    setMessage(e.target.value)
                                    handleChange(e)
                                }}
                            
                            />
                            <span>{charAmout}/250</span>
                        </div>
                    </div>
                    <button type='submit'>Enviar</button>
                </form>
                <p>{status}</p>
            </div>
            <div className={styles.socialMedia}>
                <h1>Mídias Sociais</h1>
                <div>
                <a href="https://www.instagram.com/gui166_/profilecard/?igsh=OTM3ZzdmNmtkZjNx" target="blank" rel="external">
                    <FiInstagram className={`${styles.icons} ${styles.insta}`}/>
                </a>
                <a href="https://www.linkedin.com/in/guilherme-barroso-98773b269/" target="blank" rel="external">
                    <CiLinkedin className={`${styles.icons} ${styles.linkedin}`}/>
                </a>
                <a href="https://github.com/Guilhermeb166" target="blank" rel="external">
                    <FaGithub className={`${styles.icons} ${styles.github}`}/>
                </a>
                </div>
            </div>
        </footer>
    )
}