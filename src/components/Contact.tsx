import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatus(null);


const viteEnv = (import.meta as any).env;

const serviceId = viteEnv.VITE_EMAILJS_SERVICE_ID;
const templateId = viteEnv.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = viteEnv.VITE_EMAILJS_PUBLIC_KEY;

   emailjs.sendForm(
  serviceId as string, 
  templateId as string, 
  formRef.current, 
  publicKey as string
)
      .then(() => {
        setStatus({
          success: true,
          message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
        });
        formRef.current?.reset(); // Limpa os campos do formulário
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus({
          success: false,
          message: 'Ops! Ocorreu um erro ao enviar. Tente novamente ou use o LinkedIn.',
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-dark-bg max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-brand-purple font-mono text-xl">06.</span> Contato
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
            Estou ativamente buscando oportunidades de estágio em Engenharia de Computação e Desenvolvimento de Software. Se você gostou do meu perfil ou dos meus projetos, sinta-se à vontade para entrar em contato através das redes ou enviando uma mensagem direta.
          </p>
          
          <div className="space-y-4 font-medium text-slate-300 text-sm">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-brand-purple" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-brand-purple" />
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-brand-purple" />
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
            </div>
          </div>
        </div>
        
        {/* FORMULÁRIO CONECTADO */}
        <form ref={formRef} onSubmit={handleSubmit} className="bg-dark-card border border-dark-border p-6 rounded-xl space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Nome</label>
            <input 
              type="text" 
              name="user_name" // O EmailJS usará essa tag {{user_name}} no template
              required
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-purple text-sm"
              placeholder="Seu nome ou empresa"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">E-mail</label>
            <input 
              type="email" 
              name="user_email" // O EmailJS usará essa tag {{user_email}} no template
              required
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-purple text-sm"
              placeholder="recrutador@empresa.com"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Mensagem</label>
            <textarea 
              name="message" // O EmailJS usará essa tag {{message}} no template
              rows={4}
              required
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-purple text-sm resize-none"
              placeholder="Olá Pedro, gostaríamos de conversar sobre uma oportunidade..."
            />
          </div>
          
          {/* Feedback Visual de Status */}
          {status && (
            <div className={`p-3 rounded-lg text-xs font-medium ${status.success ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
              {status.message}
            </div>
          )}

          <button 
            type="submit"
            disabled={isSending}
            className="w-full bg-brand-purple hover:bg-brand-hover disabled:bg-slate-700 disabled:cursor-not-allowed text-white text-sm font-semibold py-2.5 rounded-lg transition-colors shadow-md shadow-brand-purple/10"
          >
            {isSending ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
    </section>
  );
};