//Импортируем контекст приложения
import {useAppDispatch, useAppSelector} from "../../../store/hooks"
import {employeeSliceActions, 
  employeeSliceSelectors
} from "../../../store/redux/EmployeeSlice/employeeSlice"

//Импортируем стилизованные компоненты для отображения данных сотрудника
import { Card, Label, Value, PageWrapper  } from "./styles";

function Employees() {
// Получаем массив сотрудников из состояния Redux
  const employee = useAppSelector(employeeSliceSelectors.employee) as any[];

  // Инициализируем диспетчер для отправки действий (actions)
  const employeeCards = employee.map((employeeData: any, index) => {
    //Возвращаем карточку с данными сотрудника
    return (
      <Card key={index}>
     
        <Label>Name</Label>
        <Value>{employeeData.name}</Value>
        <Label>Surname</Label>
        <Value>{employeeData.surname}</Value>
        <Label>Age</Label>
        <Value>{employeeData.age}</Value>
        <Label>Job Position</Label>
        <Value>{employeeData.jobPosition}</Value>
      </Card>
    );
  });

  return (
    // Отображаем данные сотрудника
    <PageWrapper>{employeeCards}</PageWrapper>
  );
}
export default Employees;
