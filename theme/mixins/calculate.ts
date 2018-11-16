export const stripUnit = (value: string): number => {
  const numberValue = /[0-9]+\.?[0-9]*/.exec(value);
  return numberValue ? Number(numberValue[0]) : 0;
};

export const getUnit = (value: string): string => {
  const unitValue = /[a-z]+|%/i.exec(value);
  return unitValue ? unitValue[0] : '';
};

export const multiply = (multiple: number, value: string): string => {
  const numberValue = stripUnit(value) || 0;
  const unit = getUnit(value) || '';
  return `${numberValue * multiple}${unit}`;
};

export const divide = (denominator: number, value: string): string => {
  const numberValue = stripUnit(value) || 0;
  const unit = getUnit(value) || '';
  return `${numberValue / denominator}${unit}`;
};
