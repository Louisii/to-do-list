drop database todolist;
create schema todolist;

create table todolist.task (
	 taskid int not null auto_increment primary key,
     taskname varchar(255) not null,
     taskdone tinyint not null
);