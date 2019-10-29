import React from 'react';

export type GetProps<FunctionalComponent> = FunctionalComponent extends (props: infer Props) => React.ReactNode
  ? Props
  : never;
