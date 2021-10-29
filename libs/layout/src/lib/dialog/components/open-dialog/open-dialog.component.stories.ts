import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PGFormsModule } from '@nx-workspace/forms';
import { Meta, moduleMetadata } from '@storybook/angular';
import { DialogModule } from '../../dialog.module';
import { OpenDialogComponent } from './open-dialog.component';
import { DynamicDialogService } from '../../services/dynamic-dialog.service';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from '../../../forms/components/example/example.component';
import { SubmitCloseWrapperComponent } from '../../../forms/wrappers/submit-close-wrapper/submit-close-wrapper.component';
import { MaterialModule } from '../../../../../../material/src';

export default {
  title: 'Open Dialog',
  component: OpenDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, DialogModule, PGFormsModule, FormsModule, ReactiveFormsModule, MaterialModule],
      declarations: [ExampleComponent, SubmitCloseWrapperComponent],
      providers: [DynamicDialogService]
    })
  ],
} as Meta<OpenDialogComponent>;

export const Primary = () => ({
  props: {
    placeholder: "Select a thing",
    control: new FormControl(),
    options: [
      {key: "one", value: "1"},
      {key: "two", value: "2"},
      {key: "three", value: "3"}
    ]
  }
});