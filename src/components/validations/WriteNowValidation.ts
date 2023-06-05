import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const WriteNowValidationSchema = yup.object({
  destinationName: yup.string().required('Preencha seu nome completo'),
  destinationAddress: yup.string().email('Preencha um e-mail válido').required('Preencha seu e-mail'),
  dueDate: yup.string().required('Preencha uma data'),
  subject: yup.string().required('Preencha o assunto'),
  body: yup.string().required('Preencha o conteúdo'),
});

export const WriteNowResolver = yupResolver(WriteNowValidationSchema);