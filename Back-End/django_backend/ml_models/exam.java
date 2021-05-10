public

void

reverse
(
Stack

s
){





Stack
 tempStack
=

new

Stack
();





if
(
s
.
isEmpty
()){





return
;





}





int
 a
=

s
.
pop
();





while
(!
tempStack
.
isEmpty
()

&&

tempStack
.
peek
()

>
 a
){





s
.
push
(
tempStack
.
pop
);





}







tempstack
.
push
(
a
);




        s
=
 tempStack
;





}
