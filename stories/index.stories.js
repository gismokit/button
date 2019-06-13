import React from 'react';
import { storiesOf } from '@storybook/react';
import Demo from './buttons/demo';
import '../dist/css/button.css';
import "@fortawesome/fontawesome-free/css/all.css";
import SimpleButton from './buttons/simple';
import PillButton from './buttons/pill';
import RoundedButton from './buttons/rounded';
import Button from './buttons/button';
import ButtonGroup from './buttons/button-group';

const sizes = ['xxsmall', 'xsmall', 'small', 'compact', 'large', 'xlarge', 'xxlarge'];

storiesOf('Simple', module)
  .add('Default', () => (<div>
    <h1>Default button</h1>
    {Demo(SimpleButton())}
  </div>))
  .add('Outline', () => (<div>
    <h1>Outline button</h1>
    {Demo(SimpleButton({ outline: true }))}
  </div>))
  .add('Gradient', () => (<div>
    <h1>Gradient button</h1>
    {Demo(SimpleButton({ gradient: true }))}
  </div>));

storiesOf('Pill', module)
  .add('Default', () => (<div>
    <h1>Default button</h1>
    {Demo(PillButton())}
  </div>))
  .add('Outline', () => (<div>
    <h1>Outline button</h1>
    {Demo(PillButton({ outline: true }))}
  </div>))
  .add('Gradient', () => (<div>
    <h1>Gradient button</h1>
    {Demo(PillButton({ gradient: true }))}
  </div>));

storiesOf('Rounded', module)
  .add('Default', () => (<div>
    <h1>Default button</h1>
    {Demo(RoundedButton())}
  </div>))
  .add('Outline', () => (<div>
    <h1>Outline button</h1>
    {Demo(RoundedButton({ outline: true }))}
  </div>))
  .add('Gradient', () => (<div>
    <h1>Gradient button</h1>
    {Demo(RoundedButton({ gradient: true }))}
  </div>));

storiesOf('Size', module)
  .add('Default', () => sizes.map((size, index) => Button(`-${size}`, size)));

storiesOf('Button Group', module)
  .add('Default', () => (<div>
    {ButtonGroup(`<button class="button -blue -rounded">Button</button><button class="button -blue -rounded">Button</button><button class="button -blue -rounded">Button</button>`)
    }{ButtonGroup(`<button class="button -blue -outline -pill">Button</button><button class="button -blue -outline -pill">Button</button><button class="button -blue -outline -pill">Button</button>`)}
  {ButtonGroup(`<button class="button -blue -gradient">Button</button><button class="button -blue -gradient">Button</button><button class="button -blue -gradient">Button</button>`)}
  {ButtonGroup(`<button class="button -blue -outline">Button</button><button class="button -blue -outline">Button</button><button class="button -blue -outline">Button</button><button class="button -blue -outline">Button</button><button class="button -blue -outline">Button</button>`)}
  </div>))