const categoryNotFoundErrorText = 'Категория не найдена!';
const productNotFoundErrorText = 'Продукты не найдены!';
const productIdNotFoundErrorText = 'Продукта с таким id не существует!';
const categoryIdNotFoundErrorText = 'Категории с таким id не существует!';

const limiterErrorText = 'Слишком много запросов. Попробуйте позже';
const serverErrorText = 'На сервере произошла ошибка';

const conflictErrorText = 'Такой продукт уже записан!';
const idValidationErrorText = 'Передан некорректный id';

const requiredErrorText = 'Необходимо заполнить поле {#label}';
const minLengthErrorText = 'Это поле должно содержать не менее {#limit} символов';
const maxLengthErrorText = 'Это поле должно содержать не более {#limit} символов';
const emptyInputErrorText = 'Это поле не может быть пустым';
const idErrorText = 'Некорректный id';

const passRegEx = /^\S+$/;

module.exports = {
  categoryNotFoundErrorText,
  productNotFoundErrorText,
  productIdNotFoundErrorText,
  categoryIdNotFoundErrorText,
  limiterErrorText,
  serverErrorText,
  conflictErrorText,
  idValidationErrorText,
  requiredErrorText,
  minLengthErrorText,
  maxLengthErrorText,
  emptyInputErrorText,
  idErrorText,
  passRegEx,
};
