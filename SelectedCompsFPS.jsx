#target aftereffects
app.beginUndoGroup("Selected Comps FPS");

//var newDuration = prompt ("Enter New Duration", 10, "title");
var fps = prompt("Enter new frame rate", 24);
for (var i = 1; i < app.project.items.length+1; i++)
{
    var _item = app.project.items[i];
    if (_item instanceof CompItem && _item.selected)
    {
      _item.frameRate = fps;
        }
    }