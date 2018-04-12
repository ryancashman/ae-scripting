#target aftereffects
app.beginUndoGroup("Selected Comps FPS");

//var newDuration = prompt ("Enter New Duration", 10, "title");
var fps = prompt("Enter new frame rate", 24);
for (i = 1; i < app.project.items.length+1; i++)
{
    curItem = app.project.items[i];
    if (curItem instanceof CompItem && curItem.selected)
    {
      curItem.frameRate = fps;
        }
    }