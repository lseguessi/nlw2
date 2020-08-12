import React, { useState, FormEvent } from 'react';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css'
import api from '../../services/api';


function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [ subject, setSubject] = useState('');
    const [ week_day, setWeek_day] = useState('');
    const [ time, setTime] = useState('');

    async function searchTeacher(e: FormEvent){
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time 
            }
        });

        setTeachers(response.data);
        console.log(response.data);

    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponiveis">
                <form id="search-teachers" onSubmit={searchTeacher}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value)}}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Física', label: 'Física' },
                            { value: 'ED. Física', label: 'ED. Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'Artes' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Portguês', label: 'Portguês' },
                            { value: 'Química', label: 'Matemática' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        value={week_day}
                        onChange={(e) => { setWeek_day(e.target.value)}}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sabádo' },
                        ]}
                    />
                    <Input 
                        name="time" 
                        label="Hora"
                        type="time" 
                        value={time}
                        onChange={(e) => { 
                            setTime(e.target.value)}}    
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map ((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>
        </div>
    )
}

export default TeacherList;