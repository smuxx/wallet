export type IconName =
  | 'wallet'
  | 'shield-tick'
  | 'notification'
  | 'lock'
  | 'lock-unlocked'
  | 'clock'
  | 'shield'
  | 'key'
  | 'eye'
  | 'eye-off'
  | 'gear'
  | 'settings-slider'
  | 'user'
  | 'share'
  | 'download'
  | 'dollar'
  | 'bank'
  | 'buy'
  | 'gift'
  | 'fire'
  | 'redo'
  | 'repeat'
  | 'archive'
  | 'open-external'
  | 'recovery-phrase'
  | 'language'
  | 'filter'
  | 'sort'
  | 'home'
  | 'expand'
  | 'shrink'
  | 'search'
  | 'deposit'
  | 'swap'
  | 'receive'
  | 'send'
  | 'moving-up'
  | 'moving-down'
  | 'at-symbol'
  | 'copy'
  | 'paste'
  | 'pencil'
  | 'support'
  | 'hammer'
  | 'asset-list'
  | 'credit-card'
  | 'tool'
  | 'image'
  | 'camera'
  | 'line-chart'
  | 'candle-chart'
  | 'trash'
  | 'star'
  | 'x-circle'
  | 'info-circle'
  | 'check-circle'
  | 'check-circle-empty'
  | 'warning'
  | 'sheet'
  | 'terms'
  | 'heart'
  | 'comment'
  | 'compass'
  | 'slippage'
  | 'bridge'
  | 'kraken'
  | 'star-filled'
  | 'no-internet'
  | 'error'
  | 'check-circle-filled'
  | 'warning-filled'
  | 'plug-disconnected'
  | 'plug-connected'
  | 'heart-filled'
  | 'comment-filled'
  | 'verified'
  | 'etherscan'
  | 'opensea'
  | 'ens'
  | 'magic-eden'
  | 'solscan'
  | 'polygonscan'
  | 'optimistic-etherscan'
  | 'arbiscan'
  | 'basescan'
  | 'blastscan'
  | 'mempool'
  | 'ethplorer'
  | 'dexguru'
  | 'blockscout'
  | 'solanafm'
  | 'threexpl'
  | 'zora-superscan'
  | 'avalanche-explorer'
  | 'avascan'
  | 'lineascan'
  | 'placeholder-explorer'
  | 'walletconnect'
  | 'face-ID'
  | 'scan-walletConnect'
  | 'scan'
  | 'qr-code'
  | 'chevron-down'
  | 'chevron-up'
  | 'chevron-right'
  | 'chevron-left'
  | 'double-chevron-down'
  | 'close'
  | 'checkmark'
  | 'plus'
  | 'apps'
  | 'more'
  | 'nft'
  | 'gas-fee'
  | 'tensor-trade'
  | 'web3-globe'
  | 'bitcoin-currency'
  | 'ethereum-currency'
  | 'connect-device'
  | 'help'
  | 'mail'
  | 'transfer'
  | 'link-x-social'
  | 'link-farcaster'
  | 'link-discord'
  | 'link-telegram'
  | 'link-reddit'
  | 'link-instagram'
  | 'link-facebook'
  | 'link-bitcointalk'
  | 'link-medium'
  | 'link-substack'
  | 'link-github'
  | 'link-bitbucket'
  | 'link-zealy'
  | 'asset-coin'
  | 'un-archive'
  | 'passkey'
  | 'small-wallet'
  | 'small-shield-tick'
  | 'small-notification'
  | 'small-lock'
  | 'small-lock-unlocked'
  | 'small-clock'
  | 'small-shield'
  | 'small-key'
  | 'small-eye'
  | 'small-eye-off'
  | 'small-gear'
  | 'small-settings-slider'
  | 'small-user'
  | 'small-share'
  | 'small-download'
  | 'small-dollar'
  | 'small-bank'
  | 'small-buy'
  | 'small-gift'
  | 'small-fire'
  | 'small-redo'
  | 'small-repeat'
  | 'small-archive'
  | 'small-open-external'
  | 'small-recovery-phrase'
  | 'small-language'
  | 'small-filter'
  | 'small-sort'
  | 'small-home'
  | 'small-expand'
  | 'small-shrink'
  | 'small-search'
  | 'small-deposit'
  | 'small-swap'
  | 'small-receive'
  | 'small-send'
  | 'small-moving-up'
  | 'small-moving-down'
  | 'small-at-symbol'
  | 'small-copy'
  | 'small-paste'
  | 'small-pencil'
  | 'small-support'
  | 'small-hammer'
  | 'small-asset-list'
  | 'small-credit-card'
  | 'small-tool'
  | 'small-image'
  | 'small-camera'
  | 'small-line-chart'
  | 'small-candle-chart'
  | 'small-trash'
  | 'small-star'
  | 'small-x-circle'
  | 'small-info-circle'
  | 'small-check-circle'
  | 'small-check-circle-empty'
  | 'small-warning'
  | 'small-sheet'
  | 'small-terms'
  | 'small-heart'
  | 'small-comment'
  | 'small-compass'
  | 'small-slippage'
  | 'small-bridge'
  | 'small-kraken'
  | 'small-star-filled'
  | 'small-no-internet'
  | 'small-error'
  | 'small-check-circle-filled'
  | 'small-warning-filled'
  | 'small-plug-disconnected'
  | 'small-plug-connected'
  | 'small-heart-filled'
  | 'small-comment-filled'
  | 'small-verified'
  | 'small-etherscan'
  | 'small-opensea'
  | 'small-ens'
  | 'small-magic-eden'
  | 'small-solscan'
  | 'small-polygonscan'
  | 'small-optimistic-etherscan'
  | 'small-arbiscan'
  | 'small-basescan'
  | 'small-blastscan'
  | 'small-mempool'
  | 'small-ethplorer'
  | 'small-dexguru'
  | 'small-blockscout'
  | 'small-solanafm'
  | 'small-threexpl'
  | 'small-zora-superscan'
  | 'small-avalanche-explorer'
  | 'small-avascan'
  | 'small-lineascan'
  | 'small-placeholder-explorer'
  | 'small-walletconnect'
  | 'small-face-ID'
  | 'small-scan-walletConnect'
  | 'small-scan'
  | 'small-qr-code'
  | 'small-chevron-down'
  | 'small-chevron-up'
  | 'small-chevron-right'
  | 'small-chevron-left'
  | 'small-double-chevron-down'
  | 'small-close'
  | 'small-checkmark'
  | 'small-plus'
  | 'small-apps'
  | 'small-more'
  | 'small-nft'
  | 'small-gas-fee'
  | 'small-tensor-trade'
  | 'small-web3-globe'
  | 'small-bitcoin-currency'
  | 'small-ethereum-currency'
  | 'small-connect-device'
  | 'small-help'
  | 'small-mail'
  | 'small-transfer'
  | 'small-link-x-social'
  | 'small-link-discord'
  | 'small-link-farcaster'
  | 'small-link-telegram'
  | 'small-link-reddit'
  | 'small-link-instagram'
  | 'small-link-facebook'
  | 'small-link-bitcointalk'
  | 'small-link-medium'
  | 'small-link-substack'
  | 'small-link-github'
  | 'small-link-bitbucket'
  | 'small-link-zealy'
  | 'small-asset-coin'
  | 'small-un-archive'
  | 'small-passkey';
