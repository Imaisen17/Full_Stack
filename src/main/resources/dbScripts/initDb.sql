INSERT INTO EMPLOYEE values ( 1, 'Ivanov', 'ivan', 'ivanovich', 'manager' );
INSERT INTO EMPLOYEE values ( 2, 'Petrov', 'petr', 'ivanovich', 'developer' );
INSERT INTO EMPLOYEE values ( 3, 'Galustyan', 'sergei', 'ivanovich', 'manager' );
INSERT INTO EMPLOYEE values ( 4, 'Lepski', 'petr', 'ivanovich', 'developer' );
INSERT INTO EMPLOYEE values ( 5, 'Galohin', 'sergei', 'ivanovich', 'manager' );
INSERT INTO EMPLOYEE values ( 6, 'Guest', 'petr', 'ivanovich', 'developer' );
INSERT INTO EMPLOYEE values ( 7, 'Pavlov', 'ivan', 'ivanovich', 'manager' );

insert into PROJECT values ( 1, 'firstproject', 'fp', 'something' );
insert into PROJECT values ( 2, 'secproject', 'fp', 'something' );
insert into PROJECT values ( 3, 'thirdtproject', 'fp', 'something' );
insert into PROJECT values ( 4, 'fothproject', 'fp', 'something' );

insert into TASK values ( 1, 'firsttask', 4.0, SYSTIMESTAMP ,SYSTIMESTAMP ,  2, 3 );
insert into TASK values ( 2, '2sttask', 4.0, SYSTIMESTAMP , SYSTIMESTAMP, 1, 2 );
insert into TASK values ( 3, '3task', 4.0, SYSTIMESTAMP , SYSTIMESTAMP,3, 1 );
insert into TASK values ( 4, '4task', 4.0, SYSTIMESTAMP ,SYSTIMESTAMP, 1, 4 );
insert into TASK values ( 5, '5task', 4.0, SYSTIMESTAMP ,SYSTIMESTAMP, 2, 1 );

insert into EMPLOYEETASK values ( 1, 2 );
insert into EMPLOYEETASK values ( 2, 2 );
insert into EMPLOYEETASK values ( 3, 1 );
insert into EMPLOYEETASK values ( 4, 2 );
insert into EMPLOYEETASK values ( 1, 3 );