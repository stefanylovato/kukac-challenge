import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    initialValue: Yup.number().min(2, "Must be a two digits number").required(),
    finalValue: Yup.number().min(2, "Must be a two digits number").required(),
})