# Bonfire

Tema independente do Obsidian para leitura e escrita. Usa a interface nativa do Obsidian, as cores dos snippets de Alan Darfin e a tipografia do [blog Bonfire](https://alanddarfin.blogspot.com/).

[Read in English](README.en.md)

## Instalação

1. Dentro do seu cofre, crie a pasta `.obsidian/themes/Bonfire/`. Se o cofre usa outra pasta de configuração, crie `themes/Bonfire/` nela.
2. Copie [theme.css](theme.css) e [manifest.json](manifest.json) para a pasta.
3. Abra **Configurações → Aparência → Temas** e selecione **Bonfire**.

O tema requer Obsidian 1.11.3 ou mais recente. O [Basic](https://github.com/AlanDarfin/Basic-AI-Tools-For-Writers) é opcional e tem seus próprios requisitos de versão.

## Leitura e escrita

| Área | O que muda |
| --- | --- |
| Escuro | Bordô `#240F16` na leitura, vinho nas superfícies e rosa antigo `#D67A9C` nas ações. |
| Claro | Papel natural, tinta escura e acentos em vinho. |
| Editor e leitura | Coming Soon em títulos, Schoolbell nos rótulos e Copse na prosa em modo leitura. |
| Basic | Título da home em Schoolbell, com realce desenhado e ícone menor. Estante, ferramentas, projetos, Spaces e Pomodoro seguem a paleta. |
| Telas menores | Cabeçalho mais baixo no desktop. No celular, configurações, leitura e home têm espaço de rolagem acima dos controles inferiores. |

Em uma nota, adicione `bonfire-manuscript` à propriedade `cssclasses` para ativar texto serifado, espaçamento de manuscrito e separadores de cena. Os callouts `[!cena]`, `[!personagem]` e `[!revisao]` têm cores e ícones próprios. Veja o [capítulo de exemplo](examples/Capitulo.md).

As regras dos snippets **cores.css**, **outros.css**, **texto.css** e **Basic-Compat-Unificado-v2.css** foram adaptadas ao tema. Deixe os originais desativados ao usar Bonfire para evitar duplicação. O recuo e a justificação se aplicam à leitura das notas com `bonfire-manuscript` ou quando **Prosa literária** está ativa no Style Settings. Os alinhamentos marcados no Basic, como `{c}` e `{j}`, conservam suas próprias regras.

| Classe ou marca | Uso |
| --- | --- |
| `dropcap` | Letra capitular no primeiro parágrafo da leitura. |
| `NoBorder` | Tabelas sem bordas. |
| `document--no-title` / `document--no-bar` | Oculta o título inline ou o cabeçalho inline, respectivamente. |
| `bonfire-columns` | Colunas com separadores duplos na leitura do desktop. O editor e o celular mantêm o fluxo normal. |
| `bonfire-wide` | Linha de leitura mais larga quando o painel tem espaço. |
| `bonfire-quiet` | Coluna de leitura mais curta e centralizada, sem esconder os controles. |
| `bonfire-tables` | Tabelas de leitura com linhas alternadas, números alinhados e destaque da linha em foco. |
| `bonfire-labels` | Tags em pequenos rótulos de cor, sem mudar a busca ou os links. |
| `bonfire-image-grid` | Imagens na mesma linha viram uma grade em leitura, sem cortar as capas. Separe as fileiras com uma linha em branco. |
| `bonfire-task-cards` | Marcadores manuscritos para `[!]`, `[?]`, `[>]` e `[/]`. A interface mantém as caixas de seleção nativas. |
| `center` / `right` no texto alternativo da imagem | Centraliza ou posiciona a imagem à direita. No celular, a imagem não flutua ao lado da prosa. |

Os callouts `[!carta]`, `[!pista]` e `[!rascunho]` ajudam a separar material de cena, pistas e anotações de revisão. Há exemplos prontos no [capítulo de exemplo](examples/Capitulo.md).

O [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) tem uma seção **Bonfire**, com opções para ajustar a tipografia, esconder os detalhes rabiscados ou ativar **Tinta na aba ativa** no desktop. O tema funciona sem o plugin.

## Desenvolvimento

Use Node.js 22 ou mais recente. O visual fica em `src/bonfire.css`, a interface móvel em `src/mobile.css`, os estilos literários em `src/writing.css` e a integração do Basic em `src/basic.css`.

```sh
npm run build
npm run check
```

O primeiro comando gera `theme.css` com as fontes embutidas e os estilos locais. O segundo verifica o arquivo gerado, a consistência das versões e o contraste dos pares principais das paletas.

A compatibilidade inicial foi conferida no código do [Basic 13.15.0](https://github.com/AlanDarfin/Basic-AI-Tools-For-Writers/tree/6d1106b4e3fe276d0fee1f471bc5c538b4db0b80). A validação visual dentro do Obsidian é uma etapa de teste do tema.

## Créditos e licença

Bonfire é distribuído sob a [licença MIT](LICENSE). [Prism, de Damian Korcz](https://github.com/damiankorcz/Prism-Theme), foi referência visual inicial. Seu código não faz parte do tema atual. As fontes [Schoolbell](licenses/Schoolbell-Apache-2.0.txt) e [Coming Soon](licenses/Coming-Soon-Apache-2.0.txt) são do Font Diner e usam Apache 2.0. [Copse](licenses/Copse-OFL.txt) usa SIL OFL 1.1.

As opções de grade, largura e tabelas se inspiram no [Minimal](https://github.com/kepano/obsidian-minimal). Os callouts literários se inspiram no [Fancy-a-Story](https://github.com/ElsaTam/obsidian-fancy-a-story), e os marcadores de tarefas e tags, no [Things](https://github.com/colineckert/obsidian-things). A distinção dos estados na barra de status e a ênfase na aba ativa são interpretações próprias das opções visuais do Prism.
