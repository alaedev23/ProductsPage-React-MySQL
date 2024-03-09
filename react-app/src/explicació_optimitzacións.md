
### Optimització per Evitar Re-renders

En `FullCart`, s'utilitza `useMemo` per calcular el total del carret, optimitzant els re-renders. També, `useCallback` s'aplica a les funcions d'acció modal per mantenir-les constants entre re-renders.

Dins de `CarretoProduct`, `useCallback` envolta la funció de canvi per prevenir renders innecessaris. A més, `useMemo` s'utilitza per als preus amb decimals, optimitzant el càlcul i assegurant que només es recalculi quan sigui necessari.

He agefit un component nou al Aside anomenat `FilterType`;

Afegir LocalStorage, tot i que porta a reerenderitzar cada cop els productes.