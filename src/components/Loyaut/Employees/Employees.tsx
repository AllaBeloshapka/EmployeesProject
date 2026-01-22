//Импортируем контекст приложения
import Button from "../../Button/Button"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import {
  employeeSliceActions,
  employeeSliceSelectors,
} from "../../../store/redux/EmployeeSlice/employeeSlice"

//Импортируем стилизованные компоненты для отображения данных сотрудника
import { Card, Label, Value, PageWrapper, CardContainer, RemoveButton } from "./styles"

function Employees() {
  // Получаем массив сотрудников из состояния Redux
  const employee = useAppSelector(employeeSliceSelectors.employee) 

const dispatch = useAppDispatch();
// Функция для удаления сотрудника по ID
const onDelete = (id: string) => {
  dispatch(employeeSliceActions.deleteEmployee(id));
};
// Функция для удаления всех сотрудников
const onDeleteAll = () => {
  dispatch(employeeSliceActions.removeAllEmployees());
};

  // Инициализируем диспетчер для отправки действий (actions)
  const employeeCards = employee.map((employeeData: any) => {
    //Возвращаем карточку с данными сотрудника
    return (
      <Card key={employeeData.id}>
        <Label>Name</Label>
        <Value>{employeeData.name}</Value>
        <Label>Surname</Label>
        <Value>{employeeData.surname}</Value>
        <Label>Age</Label>
        <Value>{employeeData.age}</Value>
        <Label>Job Position</Label>
        <Value>{employeeData.jobPosition}</Value>
        <Button name="Delete" isRed onClick={() => onDelete(employeeData.id)}/>
      </Card>
    )
  })


  return (
    <PageWrapper>

      <CardContainer>
        {employeeCards}
      </CardContainer>

      <RemoveButton>
        <Button name="Remove All" isRed onClick={onDeleteAll} />
      </RemoveButton>

    </PageWrapper>
  )
}
export default Employees
