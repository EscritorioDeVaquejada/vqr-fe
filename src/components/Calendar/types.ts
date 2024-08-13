export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type CalendarProps = {
  onChange: any;
  value: Value;
};
