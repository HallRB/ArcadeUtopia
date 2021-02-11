import React from "react";
import "../index.css";

const Right = () => {

    return (
        <div id="wrap">

<div id="stats">Stats</div>
Stat Points: 10
<p></p>
<form>
  <label>
  <div className="labelright">
    Strength:
    </div>
    <input type="text" className="formwrap" name="name" />
  </label>

</form>
<form>
  <label>
  <div className="labelright">
    Dexterity:
    </div>
    <input type="text" className="formwrap" name="name" />
  </label>

</form>
<form>
  <label>
  <div className="labelright">
    Spirit:
    </div>
    <input type="text" className="formwrap" name="name" />
  </label>

</form>
<form>
  <label>
  <div className="labelright">
    Fortitude:
    </div>
    <input type="text" className="formwrap" name="name" />
  </label>
</form>

<form>
  <label>
  <div className="labelright">
    Intellect:
    </div>
    <input type="text" className="formwrap" name="name" />
  </label>
</form>
<input type="submit" className="submit" value="Submit" />
        </div>
    )
}
export default Right