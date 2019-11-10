import { StandardShorthandPropertiesFallback } from 'csstype';

type BorderConfiguration = Pick<
  StandardShorthandPropertiesFallback<number>,
  'borderWidth' | 'borderStyle' | 'borderColor' | 'borderRadius'
>;

export function withBorder(borderConfiguration: BorderConfiguration) {
  return {
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 0,
    ...borderConfiguration,
  };
}
