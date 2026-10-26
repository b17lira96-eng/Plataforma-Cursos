
export interface Curso {
  id: number;

  // Identificação do curso
  nome: string;
  nomeBreve: string;

  // Informações gerais
  descricao: string;
  categoria: string;
  modalidade: string;
  status: string;
  cargaHoraria: number;

  // Conteúdo educacional
  modulos: string;
  descricaoAulas: string;

  // Público-alvo
  publicoAlvo: string;

  // Apresentação
  imagemUrl: string;
  dataDisponibilizacao: string;
}
