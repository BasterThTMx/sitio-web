CREATE TYPE persona AS OBJECT (
   idno NUMBER,
   first_name VARCHAR2(20),
   last_name VARCHAR2(50),
   email VARCHAR2(20),
   phone VARCHAR2(20),
   MAP MEMBER FUNCTION get_idno RETURN NUMBER,
   MEMBER PROCEDURE display_details (SELF IN OUT NOCOPY persona)
);