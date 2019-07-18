initSidebarItems({"enum":[["Direction",""],["InsertPosition",""],["Location",""],["PatKind",""],["SyntaxElement",""],["SyntaxErrorKind",""],["SyntaxKind","The kind of syntax node, e.g. `IDENT`, `USE_KW`, or `STRUCT_DEF`."],["WalkEvent","`WalkEvent` describes tree walking process."]],"fn":[["classify_literal",""],["tokenize","Break a string up into its component tokens"]],"macro":[["T",""]],"mod":[["algo",""],["ast","Abstract Syntax Tree, layered on top of untyped `SyntaxNode`s"]],"struct":[["AstPtr","Like `SyntaxNodePtr`, but remembers the type of node"],["Parse","`Parse` is the result of the parsing: a syntax tree and a collection of errors."],["Pat",""],["SmolStr","A `SmolStr` is a string type that has the following properties:"],["SourceFile",""],["SyntaxError",""],["SyntaxNode",""],["SyntaxNodePtr","A pointer to a syntax node inside a file. It can be used to remember a specific node across reparses of the same file."],["SyntaxText",""],["SyntaxToken",""],["SyntaxTreeBuilder",""],["TextRange","A range in the text, represented as a pair of `TextUnit`s."],["TextUnit","An offset into text. Offset is represented as `u32` storing number of utf8-bytes, but most of the clients should treat it like opaque measure."],["Token","A token of Rust source."],["TreeArc","An owning smart pointer for CST or AST node."]]});