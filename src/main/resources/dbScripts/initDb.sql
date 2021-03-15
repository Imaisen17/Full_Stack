INSERT INTO EMPLOYEE values ( 1, 'Ivanov', 'Ivan', 'Ivanovich', 'manager' );
INSERT INTO EMPLOYEE values ( 2, 'Petrov', 'Petr', 'Sergeevich', 'developer' );
INSERT INTO EMPLOYEE values ( 3, 'Galustyan', 'Sergei', 'Ivanovich', 'manager' );
INSERT INTO EMPLOYEE values ( 4, 'Lepski', 'Petr', 'Sergeevich', 'developer' );
INSERT INTO EMPLOYEE values ( 5, 'Galohin', 'Sergei', 'Ivanovich', 'manager' );
INSERT INTO EMPLOYEE values ( 6, 'Guest', 'Petr', 'Sergeevich', 'developer' );
INSERT INTO EMPLOYEE values ( 7, 'Pavlov', 'Ivan', 'Ivanovich', 'manager' );
INSERT INTO EMPLOYEE values ( 8, 'Arkadev', 'Ivan', 'Sergeevich', 'manager' );
INSERT INTO EMPLOYEE values ( 9, 'Gonski', 'Ivan', 'Ivanovich', 'manager' );
INSERT INTO EMPLOYEE values ( 10, 'Nikiforov', 'Ivan', 'Sergeevich', 'manager' );

insert into PROJECT values ( 1, 'Google project', 'GP', 'Some info' );
insert into PROJECT values ( 2, 'Micro project', 'MP', 'Some info' );
insert into PROJECT values ( 3, 'Qulix project', 'QP', 'Some info' );
insert into PROJECT values ( 4, 'Game Project', 'GP', 'Some info' );
insert into PROJECT values ( 5, 'Home Project', 'HP', 'Some info' );

insert into TASK values ( 1, 'Main task', 4.0, CURRENT_DATE ,null ,  2, 3 );
insert into TASK values ( 2, 'Second task', 4.0, CURRENT_DATE , null , 1, 2 );
insert into TASK values ( 3, 'Third task', 4.0, CURRENT_DATE , null ,3, 1 );
insert into TASK values ( 4, '4-th task', 4.0, CURRENT_DATE ,null , 1, 4 );
insert into TASK values ( 5, '5-th task', 4.0, CURRENT_DATE ,null , 2, 5 );

insert into EMPLOYEETASK values ( 1, 1 );
insert into EMPLOYEETASK values ( 2, 2 );
insert into EMPLOYEETASK values ( 3, 3 );
insert into EMPLOYEETASK values ( 4, 4 );
insert into EMPLOYEETASK values ( 5, 5 );
