import Cat from './0_Cat/Cat';
import Widget1 from './1_Single_Class_Name/Widget1';
import Widget2 from './2_Multiple_Class_Names/Widget2';
import Widget3 from './3_Combination_Class_Names/Widget3';
import Widget4 from './4_Nested_Class_Names/Widget4';
import Widget5 from './5_Composition/Widget5';
import Widget6 from './6_Tag_Names/Widget6';
import Widget7 from './7_Media_Queries/Widget7';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<div>
  <Cat />
  <hr/>
  <Widget1 />
  <hr/>
  <Widget2 />
  <hr/>
  <Widget3 />
  <hr/>
  <Widget4 />
  <hr/>
  <Widget5 />
  <hr/>
  <Widget6 />
  <hr/>
  <Widget7 />
</div>, document.getElementById('mount'));
