// First, you import the Component annotation.
// It’s used to decorate the App component by adding details that are related to the component but aren’t part of its controller logic, which is the AppComponent class. Angular
// looks at these annotations and uses them with the AppComponent controller class to
// create the component at runtime.
import { Component } from '@angular/core';

// The @Component annotation declares that this class is a component by accepting an
// object. It has a selector property that declares the HTML selector of the component.
// That means the component is used in the template by adding an HTML tag <app-root>
// </app-root>.
// The templateUrl property declares a link to a template containing an HTML template. Likewise, the styleUrls property contains an array of links to any CSS files that
// should be loaded for this component. The @Component annotation can have more
// properties, and you’ll see a few more in action in this chapter
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
}
