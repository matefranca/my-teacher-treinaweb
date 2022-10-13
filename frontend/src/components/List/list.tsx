import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";
import { Description, EmptyList, Informations, ListItem, Name, Photo, StyledList, Value } from "./list.style";

interface ListProps {
    teachers: Teacher[]
}

const List = (props: ListProps) => {
    return (
        <div>
            {props.teachers.length > 0 ? (
                <StyledList>
                {props.teachers.map(teacher => (
                    <ListItem key={teacher.id}>
                        <Photo src={teacher.photo}></Photo>
                        <Informations>
                            <Name>{teacher.name}</Name>
                            <Value>{teacher.hour_value.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})}</Value>
                            <Description>{teacher.description}</Description>
                            <Button sx={{ width: '70%;' }}>Schedule Lesson With {teacher.name}</Button>
                        </Informations>
                    </ListItem>
                ))}
                </StyledList>
            ) : (
                <EmptyList>No Item Found</EmptyList>
            )}
        </div>
    )
}

export default List;