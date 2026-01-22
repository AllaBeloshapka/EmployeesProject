//Импортируем контекст приложения
import {useAppDispatch, useAppSelector} from "../../../store/hooks"
import {employeeSliceActions, 
  employeeSliceSelectors
} from "../../../store/redux/EmployeeSlice/employeeSlice"
import { Container, FormaWrapper } from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import { v4 } from "uuid";




// Ваплидация формы с помощью Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name field is required")
    .min(2, "Minimum 2 characters")
    .max(50, "Maximum 50 characters"),
  surname: Yup.string().required("Last name field is required")
    .max(15, "Maximum 15 characters"),
  age: Yup.string()
    .required("Age field is required")
    .min(1, "Minimum 1 character")
    .max(3, "Maximum 3 characters"),
  jobPosition: Yup.string().required("Job position field is required")
   .max(30, "Maximum 30 characters"),
});

function Create_Employee() {
  const dispatch = useAppDispatch();
  const employee = useAppSelector(employeeSliceSelectors.employee);

  //Инициализируем formik для управления формой, изначальными значениями, 
  // валидацией и обработчиком отправки
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      jobPosition: "",
    },
    // Подключаем схему валидации
    validationSchema,
    // Отключаем валидацию при изменении полей
    validateOnChange: false,

    // Обработчик отправки формы, функция кнопки submit

  onSubmit: (values, helpers) => {
   const employeeObject = {id: v4(), ... values}
  // Добавляем нового сотрудника в массив сотрудников
  dispatch(employeeSliceActions.addEmployee(employeeObject));
// Сбрасываем форму после отправки
   helpers.resetForm();
},
  });
  return (
    <FormaWrapper onSubmit={formik.handleSubmit}>

        <Container>
          
          <Input
            id="name-id"
            name="name"
            placeholder="John"
            label="Name*"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
          />
          <Input
            id="last-name-id"
            name="surname"
            placeholder="Johnson"
            label="Surname*"
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.errors.surname}
          />
          <Input
            id="age-id"
            name="age"
            placeholder="25"
            label="Age*"
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.errors.age}
          />
          <Input
            id="job-id"
            name="jobPosition"
            placeholder="QA"
            label="Job Position"
            value={formik.values.jobPosition}
            onChange={formik.handleChange}
            error={formik.errors.jobPosition}
          />

          <Button name="Create" type="submit" />
        </Container>
    
    </FormaWrapper>
  );
}
export default Create_Employee;
