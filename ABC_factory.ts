interface AbstractProductA {
    usefulFunctionA(): string;
}

interface AbstractProductB {
    /**
     * Продукт B способен работать самостоятельно...
     */
    usefulFunctionB(): string;

    /**
     * ...а также взаимодействовать с Продуктами A той же вариации.
     *
     * Абстрактная Фабрика гарантирует, что все продукты, которые она создает,
     * имеют одинаковую вариацию и, следовательно, совместимы.
     */
    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}
