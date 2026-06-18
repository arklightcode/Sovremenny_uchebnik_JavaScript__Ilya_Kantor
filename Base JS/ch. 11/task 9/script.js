if (-1 || 0) alert( 'first' ); // yep, res = -1
if (-1 && 0) alert( 'second' ); // nope
if (null || -1 && 1) alert( 'third' ); // yep, res = 1