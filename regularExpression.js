/e+/g;
//g mean global flag
// e+ mean : match as many you can but at lest one E.

/ea?/g;
//ea? whatever is before E is optional, if there is A after E matching it, if not it will continue matching E.

/ea*/g;
//ea* matching all A after E , if there is no A it continue matching E.

/.ea/g;
// . Dot match any character except line break, or anything before E it match

/\./g;
// . searching for dot

/.\./g;
/..\./g;
// by adding dot before forward slash, we are saying match every character before dot.
// if we add one dot it will out put one character before and two dot will out tow character before dot and so on.. .

/\w/g;
// \w saying match any word character

/\W/g;
// \W match anything which is not word

/\s/g;
// \s matching any form of white space

/\S/g;
// capital \S matching anting which is not white space
