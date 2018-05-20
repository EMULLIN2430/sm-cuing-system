inlets = 10;
outlets = 1;
var vid_num, vid_pos, vid_speed, vid_zoom, vid_flip, vid_db, vid_prespitch;

function list(a, b, c) {
	var arr = [a, b, c];
	if (inlet == 1)
		vid_num = arr;
	else if (inlet == 2)
		vid_pos = arr;
	else if (inlet == 3)
		vid_speed = arr;
	else if (inlet == 4)
		vid_zoom = arr;
	else if (inlet == 5)
		vid_flip = arr;
	else if (inlet == 6)
		vid_db = arr;
	else if (inlet == 7)
		vid_prespitch = arr;
}

function bang() {
	var output = {};
  if (vid_num[0] == 0)
    output.vid_num = "n";
  else
    output.vid_num = vid_num[1].toString();

  if (vid_pos[0] == 0)
    output.vid_pos = "n";
  else
    output.vid_pos = vid_pos[1].toString();

  if (vid_speed[0] == 0)
    output.vid_speed = "n";
  else
    output.vid_speed = vid_speed[1].toString() + " " + vid_speed[2].toString();

  if (vid_zoom[0] == 0)
    output.vid_zoom = "n";
  else
    output.vid_zoom = vid_zoom[1].toString();

  if (vid_flip[0] == 0)
    output.vid_flip = "n";
  else
    output.vid_flip = vid_flip[1].toString();

  if (vid_db[0] == 0)
    output.vid_db = "n";
  else
    output.vid_db = vid_db[1].toString();

  if (vid_prespitch[0] == 0)
    output.vid_prespitch = "n";
  else
    output.vid_prespitch = vid_prespitch[1].toString();

	outlet(0, [
		output.vid_num,
		output.vid_pos,
		output.vid_speed,
		output.vid_zoom,
		output.vid_flip,
		output.vid_db,
		output.vid_prespitch
	]);
}
