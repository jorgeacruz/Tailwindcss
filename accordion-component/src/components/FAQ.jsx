import Accordion from "./Accordion";

export default function FAQ() {
  
 return (
   <div className="p-4 w-1/2">
    <Accordion empresa='Eleva Educação' cargo='Front-End Enginer' funcao='Desenvolvimento de novos websites institucionais com o objetivo de aprimorar a experiência dos usuários finais e simplificar a distribuição de conteúdo pedagógico nas escolas que adotaram esse novo formato.' />
    <Accordion empresa='BIanca Guilarducci' cargo='Web Designer' funcao='Desenvolvimento de novos websites institucionais com o objetivo de aprimorar a experiência dos usuários finais e simplificar a distribuição de conteúdo pedagógico nas escolas que adotaram esse novo formato.' />
    <Accordion empresa='Web Jack Design' cargo='Front-End Developer' funcao='Desenvolvimento de novos websites institucionais com o objetivo de aprimorar a experiência dos usuários finais e simplificar a distribuição de conteúdo pedagógico nas escolas que adotaram esse novo formato.' />
    <Accordion empresa='SolutiON Marketing' cargo='Front-End Enginer' funcao='Desenvolvimento de novos websites institucionais com o objetivo de aprimorar a experiência dos usuários finais e simplificar a distribuição de conteúdo pedagógico nas escolas que adotaram esse novo formato.' />
   </div>
 );
}