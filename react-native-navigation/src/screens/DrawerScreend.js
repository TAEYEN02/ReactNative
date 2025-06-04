import { View, Text, Button, StyleSheet, Pressable,Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HomeScreen</Text>
        </View>
    )
}

const ProfileScreen = ({ navigator }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ProfileScreen</Text>
        </View>
    )
}

const CustomDrower = (props) => {
    return (
        <View style={{ flex: 1 }}>
            {/* 드로어 메뉴 스크롤 영역 */}
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#A9A9A9' }}
            >
                {/* 프로필 영역 */}
                <View style={styles.profileContainer}>
                    <Image
                        source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgYGBgYFxoaGRgYHxgbGBgaGhgaHSggHRslHxcaIjEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OFRAQFSsZFR0tKysrLS0rLSsrKystKysrLSsrLS0tKystLS0rLS0tLS0tNy03Ky0tLTctNy0rLSsrK//AABEIAN0A5AMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EADcQAAECBAUCBQMDBAICAwAAAAECEQADITEEEkFRYSJxBYGRofATMrHB0fEGFELhI1IVYnKCkv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHxEBAQACAwACAwAAAAAAAAAAAAECEQMhMUFREhNh/9oADAMBAAIRAxEAPwD18rEpr1C9nf8ASKEVYHT0rtaF5KTLSH9hBv7kEkiIJAqBtR4sFMW+d4ocQ2j6A2MBVMNQ/r3FooKUh6XJjn1fgCpJggRT7mLa17d4vKISGKnVvrxSIAKUQWynk6DesAmTi+Wo33MFxKcoOV3VV9IWRh1F+79t4BuVhvualeAP4iilqJGUO1CHtzSL4mbl6cpU4Zk/7tF5SgzpDcEM2g1sIAaZhepBG1r7kwyxUGIIb3gC8IFKSpY6hcuGpoBFg+f7S1agjy1vAHRLBF35hafLJNEnYuQ3lDCA1GYA6UfyEctWlufaAzcRg1MPdtPloCVmoLpLts5547RsoUdTXZvaIXIGooKjgbGAywcxBcF6EVYNWjGNJM0tRh5enlCv9gkEltXDm1XpsIYJqHuKxQRJJodnf8xRPBBrvFZoF6nhzXuBeLyqCqA+23tAVmk7V7x2WOnrJIygM9XFYnMH86wHNaKNlFPc19YMpTB9tHgC5hIfISHZtfOKjpc5g+zuLQRCkk0a3lxEKngNSmu8VQHrtoP2goyDlezfrFl4gAOXNHoH9hCqlhqnt30pvFpQNW6Tb/cEMiY4BBZ/L2iIqhb3odjHRQgxGrJpVzxSOVOSog3egZ7tSto5amoKE7i/Ii8sUIFC2jXjCqqkvTyiShrV03/MWnZtEW1e9NG5iJigBcb7N3gIVNZnJLd/eJ+qOooFT2pvc0i5l5hX5zAggPlb+e8AzLmEg2GmlflbRb6zuQ3Oj7txCk7DkF/5i6U3Dlvf/cFNggsRewHv6CKTJWhLufeAJUoGwygX1fWkXTihq5iC8xGYDRvjERysQUioATbeKLmJJFW4I4i2HBBJJBGm/NIqCy5wUHDVs+8Q5Kvz8OkUnoYBiwuTRmgBmk1Qr532gDqV1EM55LtFZq1AaPfVmgEgqCiaac1/aCBCqubmo0I2bSAZMwZa2vpFb22gZnanccxZQG7tFFk+Z7RAQxKnNWo7gaW0iAqtjTX3gGJlFTAOaveAPn3pHJIEDTLYX9YIkcQHGu/zaKuRT40QutSSOLRSYp6vX9oCVB63i0oXbWsUKiaA9o5RUln3azQBQGBD0NYmWwHzziENElJFzevnxFRdQAvWOiwXz7R0FZqVAl8vU3z+YoJygpSQkuK1rQ7cilOYUShSQCFdiak7FvmsNJWWdg9SC9z56RlRzNVmZvtJBPlYCzxdKwoO/Sk9VL+sIS5inIOrGhF9XjvrswB30oK2p2MQai8hJAUQSXrRzuOYshJFHp+sI4ZPXmUe1DSjMa+8PJnu4dtt6QQIS6X1alW11pESzmB6cpdmWz0pZ7QOYOtBUpVDYVzEhg5FgKwSYA4cjjclvxFVZUhqnQUAs3pEZHqyQ9C+nZoKlOYv6jfYtpErQ7kGrN6mn6xAJUoaVHH5eOwqC96bHfiKyqDLrtFig53fS9O8BEyawKVBwTtT4IJ/bgAhKb3IoBC+Jx0tASpRqXbtAJviadE35jOWeM9rUwyvkPkAUA9zxaBzDTpNW1pCifEAb6biCYOehQJSKA1q0JnL5S4XH2LyZ4UVJspJZQN+D5tBU6x0xlPQ6Wv5mOCOpn6qdOwjbDtQ3nFknb55wKerKWB/jvFkqAap/wBbwBDwHiRUci28D+rw0WB8vfaA7NRv5iCOKxIp58REsg2OvaKKS5R+5gD3hiYCQdeLRUNBZKh5Pvb5tzAAXxS3eBSprmmlDce8NLQfKOFmgKJKRxHRb37h46KE1SzZTZfR9i2hixwz7Nlpd/TX2gScQFdRBzbDXYQ6iYGOUAF9d4yEEocChL7pYj/63AgSsOpzTsN99uLRooUS5CgRVnLkJ7wWYkZQ7kbamzGloKwsKchJcZiogXDJuLnvDk5YJFw19K78wb+yAzBRKifYWaF8XhsoDKalzVj/APL9xAH+uHoXowb8n8QM5TyKW94CmWqgYUrelvxSFpuLCSXZ/wAcfNozllMe6uONy8a8pYcl3DegtQxadiAWbfe/mLR52X4qTOTKSkdV2vxHp/7QJtc3/mMfs/jp+vXtUSCzWG5O+0GlySBdzuYnLFwuMXkqzjjJ8Z/p4YhPUopULEaHSMFGGXKP0phzKTY7iPeyVRlf1F4QVgTJf3p03GvnGbNx0xy/GvOLSwg3ghcrSr7SQyhcUZ27wXAYJc1TMRuTpDWE8NVhiQTQm934rE4pZV5spZozIBCj1OzgsnVqQdE3NpV6Eix4iwRQmx3NHo7hoBLEwqUpTAMCEgVHDtUx6nkFWAp03148/OBzaGiasdRVrQKRKJLkkXuGbbh+8Uxa5mUAhKiNixI1oIC8hYUKCCB34bzhTC4rrbKUpY05sP1g82actwFGlA4erCKiy5hCSEsVaPZ4KDFESClurNV9Pm8StW0AUJtR4sEdJ/xp6c9oEpdHdiaDTuamFsU0wFOYhR2NLMwBgp2WsEs5a/HnEfVYOHr+doUwMkoSxVm54h0EG1ONflIqAKzEuFsDYZRQR0MlAGrR0AqA1QGN6M2sAUKhySOdBrUbQZKQepQIBvx8b3gMwFRAILbD57xlRpcwMChIa1Q3c8xInLqSAQOQ7avF0JADAU0ipS4FK6t+IAhnp1diwobDeFCiYR0M26n9G/WBzJRU5DjKah7jUEcvFjOIF+2xGx3/ANxAlMmGWn6buRc0DxlTy8afi/V3YWjG+oXjy8nr2cevxaXgQCZ610dgB6CPShZUY81gV9fZo3MNNjpPHK+nTA89YKkvAZiGLxixuU7KVpDqSLPGWmbSPOeKf1L/AG7Al1EkC3rG59RivZhASaBoU8VTnCQC1Sx2pQ0jA/pn+p1YvMn6ZGVuotfa8buJR01izq6Zs6YkpEwKZ6AuSbXaGp0xThmqa3r231jpksENW1S5gIUAWevMdnI0nEVpoRzF5kkKDN6f6tC82lvS3vE/XLZfLmCOMoEBOocBr9nifoEBSRf8X17RXDJPVV9qke8SgEJZKldzUjeKOCFM9CWpViBo+hNYvKZRpc2rduI6UvpqAkihoNeBFiEkAqFhc0YHXiwgOmYcEuRcEGthvAVYev2BilgoH8h+RWLolsSoVQwZJ/3aJE+rHp0y0/AgISCA1294EqYpK0ukWIeDAxKxXX9IDkFtI6Ojo0I9Of4iVygx8raWgakpOoy6AVcvUneKIXWt3OlDs50jCmJ6yASGpf8AXtCyZpWXQXFQNK/vFcYhUxGUUOz37wlgZJQCVnWge3mO0X4RqyVFLquVBrNUb/tCE7FBLAgKJ1Gh5hbGY1wSX7D94XTNKk0uavt5RFRi5pLGKJlpOkAzOC9wYJKXSPPn1k9OHcGAaohrG+MypKetTGFZkosCNY8v/UHhK1LzhRPBsORGp3e2K9f4H47LWogLBc0rX0MemlsoR8m8A8NImgqcgfm8fSMDiqXjOUkvTUt00VYdxS8eRxn9IqmzStan7d6Xj02H8QDkQ2icD1CJLrxdb9Z/gnhKcOGAbXzjVmqekStbiBIVWNT7YyKTEWGj6B6cwksVJrR/91jXxmHoVD/cZs4Hamla/OY7SuNgSCdbVtHCaTzV4uuWQCQCX0F9r2ii5amcJBfQUUYoKlQ4FN4qZ1yCLmvP62hNS1IqQxYuTvp+sLScSiYAwLh2IFQptRvpWA2pc3WlRYs1O8Fl4hKnSakaEa8Gx8oxpgzKCHBJFHoxavcPsYF/akfapSVHKGSom1Ax7xUbonIUpSaUd2r7/LGATsKgETGJIHSxY9qmsLy1LCiyyaMygAHF7axCsXMoWDC7ahrd3eAfnrDAqDORQEW38ooonKwN7F27HvATiKX0Zlal9xEjHJHSQNCBoBqBAGytQx0E+sDUH40dAY2B8QWskqlFIsCWc7tqNI0s1e94Umjqaqajs/GrwWa9GLAX1cNbj/URRQTVmfk6d4Txs3pYkCz8Ry5lHIrcQj4llWlIIuXpc8E6jiASxU4pUAxrXg8RWcs3cAmBzcrhOiWufaKYgb/vGkEw4dJ3/aJlqjOXjSgFQDgXG4ercxoJLsoWNR2jhyR3461xVMJTw8achHTCGKSxeJronobMIX8Z8ZOHQnKHUbPbmG0gGEPGMKmajKoWqIYyb7Mr087O/qCaVZvqKcmgTb+I+l/074gVyUZ/uIr+8fJP7IoN6P6R67+nvEVpUEJSS+nzSOueM0xjlX0damELO5jpRJAeLJTWOWmttUVTHn56GUoF2INt43MOujRmeJJZT7xvGsWE5lBmKvt3NBpV4mUhqXu5+b6RVRL6tZt4KEkEJALM5JLgcbxtlZFaObM2h3vSFMVgQqxyvdgAX3BA/MHd31tYvQj+YqJoKimrgAsxFNK+UELSMI1GcVIJqXd9Yv8ATAdKkuW6SxASdC4hwodsp7giJoWB84KzZIIICySWd2YbNesEGHdjXpZq7/kQ2qUNTQc6QGXhpYJKQCSwNXIa38wRQJVW4bRgX3bbvF04bWuhb5xBJcoJJYluf0jlK8+0VV1TCLN5x0ClzCbpNKR0QIjCqQrMivBLP27QQJIN3egbSnr/ABBDhgVu5DX509Y6bKvcjbRm0iiipYZnp3JfflowfGHYZXYX0OxpppG7OkE5ctP+wow/3GLipIOZ1Egmp87OPlIkGWlbU1946cstSpfzhqZIcuK6du0DxCMoSaOS23vFRmYoKAHTe+/l7Q34RiAUZDQpNORFMcSCE1dqbQnKTlIJO9fxEzm41jdV7fBnpEBxgeKeFTgUJLw3NRSOfw3vtmy4KuRmFYv9KGpSYkMmOn+nJajcxveG+GIljpDnfWLSk1huUqNMmJZMGTCwXrF5NTBYbkkwDxKyTzXtB0iA48HLT5SJPSs9CwSQGcX7kfpBSSpmNAWKf15EKS1uBr7efzaI/uBmuzGulY6MHpjgZSR5aeUBKmGrfpFPrB2d1Aez/wCo41poR8HaCLJVrX94LcavbYwsQwr5bQWWtTP/AKMUWYv2eIMoaNW9Gp3EVzOI76im7/mAshIAAALCOmJDRypmuny0SBaAokbkx0TLmgi3tzEQEiUQSaKfV/YNErljM4oe5APesLDEgK6ywsAHuDvpDCkCqqDNtQwUGYwCiaDRw3nyeYxCUqdLjNxtv6RpY8pVlSSCAqu7Nv8AmMeQuWFqAPBJOtKCKgSkhCFAOo8vy1oFh8KofeUlmYNbe4huXiACRcClBUQnOxjrKUhVATpUcGAtjGFat2tCK5YU9ilvfmHFqcX7g6vAJSUh71qXdmbU28hAPeCBpZS5oXHnGrKnPQx5rwvHpEwhmBo7u/PlSN4p2jllNV0x7OFMRLWziAyVkFjDTAj5tGVXQqGpcICWXjTwkmkajNWW4qNYmUtoZmSQ0BJQm94lU3Is8JeJkqYBTa09vxBJeJF38ozsXiAVkGlB8eLCl5s5IWpKQyzbYliAdiaGkMS5QD5QC7EWD/tXSBz8OhWVYukhiDdjQHzhlUtyCbWZyQDu/tG2FJ/QPwwcekckdTgkAi3esFUlzcitGO1Y6RMCiAb7erV8oCpLHhveBTQL68QabIILhRaxHO8SqSbN/H7wQJQCeNO0UmJU1Gp39o6YoljWhdt6WPrF0hw5BBOh3iiwt92jUNouSAKfNYozWHz8axLE0sHfiAjDzXFSAXNCD8aJgSZyauQCCdI6AyJ+PGbOHNGYUYj9DeBeIYyYZYDh3KjlG5LfnTaEJeJyy6mhcEFh6RKi4eosGP6n9opS0vHrQplmhdzw9WsxreCYvGISUgXvZ9KOezwouS4WSXKVdIzN0vRgd294SnpMxdKtRx8402iVWjhVfTClqzKJNAxdm5MM5UIAKaZizG41vrFJZ6Qgmoq5vAPEU5kgKLAENUVpS0VBVIzFJCgliTu41YwjjMUZamfMC/5t5CHJ2LTLlgMARQXfM1RURm4eSlSXLlRoHdgeIB2YtKWygMQ7C9rjT1jU8NxIbK9m8gbRhzZKioMQkh8rORej+gisnFqRN67ZQ7Ch5teJlNxZdPcSik3h2TIQ33CPNScTRwaG0RMxB0McNu2nppikJrmGvrBcFjUEEA2jwU/HTQsdVattGjgvFAfuFx7xvTG3o/FPEukkEsLt+kYyPFEksHgM+akSVgKJCtDVj8eFMDK9Yxl01jNvRYaeSCWcAE945NepRotWYAl6cbfzF8ErKlwCXLAAe/YQ1LS3UlIAqait7AdjGsPNs5+s5c/KUgCr1AcsLP07X3g8nFEJVmUQxNQAd69rxeTiUqWqWpO6m0L0II8oukISkhgkPXbeh13rG2AvruCpBqoG7M+hazwYTUDK56g1A40AIYUtHDBihowtSgBrFUSEuSxBrf8Ax8tooNiMS7JBoQerUcViMLQZS7aF9tm4rAerK7Xox0rvsYrNC3KxQADKLioD8+0VDOKmqCwwo7cuf0aLKXpRyPQ8QrJmzEpBO4ox0F7wrLxOYqOYvmKmuQGrlp7doDTSOfmkEMunfmEU45LgKPBp7wadP6S5AP8AjyxgDhA0b0joFh8TnDtwa6xMB4FEqYAyA/Nm4bvGhgMLMJaaC7UAU5vcgVH+4cE/MAR0FRalfOlQIhGHyEBy5LlTuKF23FBGgl4tICEuBX/qS7h6/iMeaoq6icrEUHS3BJozPHoZs4LzPVIFGGvftGdL8MDVWGqWuQBqd9LRDaqVOCQ5ZiG05cQtP6g5IDPb8j3jTlYN09JobpNP/wAtcRceHpSOpioVS3z8iAxV9Rc9St/fSGsMoIScqSw6lPbYmsPf+PSlKc6HUo1yn7XL1A8ozZWDUlSkhJKQS2Zg55A+GADiVTCoE5gCSzBqfvS0CRqLqUXfQDUQwMyema2Y1yvQOats/wCsDKS4JSGZxuR2gD4LEg9DhwHDbRoIJjHwgR9VOUaM+9KR6XD4ImPPyTVd+O9MLxmUWCxQpLeRheVjXTYhW0ezXgEKSUHX86R5JeAWSU5bEgbbRvDLcYzmqtImO25/HaNXApreMWaCg1DANuPlo9T4PKCkg0jHLGuOtrBSwwo7VEEl5UjKml773jsMprRXEAFVUt/27/Hhx34M58gGSnMSSyhqLV1ct3/iCz5mZ05QQr/JmGajU1MRihmaWAOrcmrGsMz1EEM9Swo9fLtHZySpbAAmp10HeM6Xhg5KSVmtColnJdh+NIdxJFCr0Jbk24EZ39jKCwtCyg0dg6a8ctAHnLVmQDmUmz0AzaUFX9oICGWHL3LaaMP2EFny83Qz2Olaj94HMlubEFJNCOkjXv8A6gBqw6lICfs1D1t34gMgICkhJ6h9xFG0DgjWHpUlg+57s+n4heZhkFWdLgvY8XfmkVEHCBlLuXN9R+9IripaQmitAagn30hmcokHdQ8rQAJIS7ALbKwrTSm8FK9SaC19YmJOL/7JD9zbyiYaoz58opYJI16mDDZt3tCWLlCa5BQlwOklipVnzHSK4eeSAkLDGjOfNzoLw/Jwaku+UnS/lWNMlMDh0tlJBCSWys2xzb68QSZgSTR2IP2sktqH1Bg8/BDKWPShlMKE0q9d4KM6ndISlmJsC9bdoisHG4EApIUdAApyXa2YaUaHTOJQw+yuYmqqHR4ZlTEqZADAlisvp+ARSKzsPLSuoLAuljRxUkteGxmnxJZUEgsBR99ixgEqauYrqUxD6/c2m0aM2QlRcAl7Uo9aekdPwiGU24YENpv22EALGSUqR1sBoUhyAz69oURgmAFAFVCmckXrsY0sFhwAUqPSb7uaA15LtF8L4YUpJZKnLAkaDVI0aJtWYvBJQMyycyS6CnVv+wOkeh8Kxf1EtwO8d/4l+qxG7Ek/GhKb4ZMEzMkFJ3GvfcxjLHbWOWm3JlpdaVUUliDukih9QR5RjzpYbN1JKicpYnew52hrCYWcrKqYUpDa0JGqSLc+cakpISnqIA7N6DypSJMdLllt5TG4P6iMruXfMPN0kfj0hXBY1UgGXNzAOyVAOBWjxveIzhnDJKWYnTW/NAD5QGbUiYFUfqNKjXShaxjVm/WZdNGR4ihUvMhVQyg1yRVvMUiyvEDMOdCmQwzCjmu+kZQwiGClAJU7pU4ctrmpuO8MSF5QUqJAJKkqZjmIqOREmOluW2xhyksp62ewrz3gSZv/ADqAKi17NqxG0ZknFLSAkslBo2XNSpegoDvESEqlkrAGVThyXp+h7xplsyJqlKUlZSRQ5qih2oxAtFFqmDKooehzAWIFGrdhX1hJM50uHBBqFF0vfy8t4ewMxZR1dJdx2anzmALImuAprWYMPfjSD53q7uPSt92gIX0lg7htn3/mASJyWYlVC1d+9KDdoB1SOmlD07b1tpeKTcOKAACpLsdb/mEE4oAuCcubqU7sANdhGgmqQQrzu9be0EUmILEJuBQ3I/mFTNfMlSqijN93+4em4hCdLCw0b9BCk/CgjNLUXZ3Icvc10H7RQtjJBzApCwCAenK23rSOhGaSCxVXgOPIvUR0BlSJ7JSHD1IFmc7N8eN7BywoAgAkJpWgNi2z39IRwGBlKVbqFSHo3besOyPEghglILXpXlm0jVGjJwhZ3Y3u4HnFVSiQymI1LlJJsfJjBE44GWV1UHajUcsAa8tCM6cpySUgG92GzP8AKxkCxqcpOXqUQwS19dNGeBI8KUtImAJCnLpFBazafzDCZpzJVm0LlgzbACtWgaiCorCwAovcg2qO37xFX8TWyUpCgZiSCctgLED1hDEKUFKC03ZjdSX070jQOAG6XIdSyWCRo1aWvC4kLBKQsLVQl3oDYvpAL4vEIM0IyhSjtZnAJNb8QbDLSl1EKAFEuQbb/NIGnw5l/UZiKk/4hi7aaEe8M4jElSWlp+pUg9ICUvS+8UM4eaFA/TJNXSVFi7P8EWlomBKlKIJ7eZgfhOHKEMp6uWa1Nx5wzisQyHBoSL0bf8RBTBSsqU9Di6UvUP30g2MmukEU6hfTt81hITQUlwVo0mBunVnGkXlSAEhgSWoXYZbuYoQAK5mWZLDKNTVxqQeIcxXhiM3ShJCnBFQCBVn97w59JZ+1k/aQaKymxo1Qf1jpuIoUn/EO6aFRYvlaxo7bGIM5PgSVgB6A0AtlfUGGUyCgZL5C7f8AqQWL6bQ34fjPqSyotegJ9zqTF5RCiKghqNc7gg1oYoy8QgTPtS5s2YJpc1BrCasPmYJQoZSxDa0c8t2j0aEoH+CQxKkkavQUuDWFZeDR/wAgS5W75VKPo4NnesEJTcMpKWyqbyIPpaFcPiFJXly5WUQXJolr1uduxjbnyyjMpyXLnKmrCwA1gGMxCQkLUAElqk1rEUuqZlLAkZy9NNfJ4nFS5YbJMdjoXA3ejRfD4WWpaiEqSaAktUClhpaBTMAeSkunKCASTUluIsRWZLdKkgdBdykkV8xTSHMCsABKQQEhn42OnnCS5ExCSGLEdRLGrsCE6aRTwfEf8jMpIIoCXDPRTvahEUbSCJiHSoZSTXetdLXpEzsxSQ+UD9GFH7RlYKasZwDoSkGlN66ilotJC1LSD1JWly50AuObmkRTy8O320BrROa/JjoaITR3FPbTSJgjyviWEyqOW6h/iQxNyTzA5WLU2Uhww0zMH9qawr4LiSpQC+rRzdhVn/WNyclKQlSUsTsaV48/aKEBilSpRShCWUSRTV6gDe19oKrFZik5CpSks1wnQWDuYOuQkkKIcp6n3YUEITpueds6gDlJFAwAp6+URTQWhMpASepRAUBpuLctDhwQTmUVB1GxsntWMyaDK+olBI+0i1CQvjgRqSpImh1XdKfUX94ItIw7JyqUGdzVybM5s0WnsATYu5y1JcX7cwjjHIEpy2YgmnUOQIcw8lKTlD0SGr5GIqs1OeWAnpGx76jmpjk4VRKaZdVMSA2lOS9oNgZYKPqGqkqLE+Y/BjOxWKmEjrIBcsGHrvFGsgOWoCQpgK1t6RmrwqCCkl092BOpEWwMwqWEpZLg5jcm9OB0wyMOUqUMz0BDgMlyAWHr6wQvgvpl0glk7O4rqBe0OqORDgpzK6ruw47WhDGygSU65XfV2/g+ULqlKSv6YWSADUgPRNn2pBTmPxKwkFKcq1dJZnLahhz7wPDhaUJ+oS4IDX94zET1KV1KJoV31FNI15csKBSqoAFO4c18oCucA50oKa1Zmv6QynGf8jdJDHLl0cW9I7J/wnZrepp6ROBQCWZiKuCfeAbW2YFR0FHBtV230eA4RaUKWQaAM5968cwHxWWEqlqZzVuPmxg05SRUpcULPR2Ne9IIJiZuZKsv3FyKHQ+j8Rj+ITULksVNmAAGVgG1a259Ifw+JP1lI21ps9WHJjLx+JP1BL0Nb/8AsTAbOAkEJzKUSSkCzHyHLRRK8oShaiWB0uxoO7GLZlfTEzMekPlYVF2fzaFk4JwlalFRoWYM7U84AniACUUd2DBzqaufeAeEBIQpdCqwGr7V0cwOZL+okpUS1+XB3i+GXkkIWBckF+7X8h6RUK+OYhRCeouHCk61azaRTCTpiBmR1gBy2jvUBqNR4cm4YKlkk82q7Evm8oyZGKKSCP8AJ3+N67wU8rxRaT0qBBr1Akh7jtHRmIYgGtt+TERFf//Z' }}
                        style={styles.profileImage}
                    />
                    {/* 유저 이름 */}
                    <Text style={styles.profileName}>홍길동</Text>
                    {/* 유저 이메일 */}
                    <Text style={styles.profileEmail}>one@korea.com</Text>
                </View>

                {/* 기본 제공되는 드로어 메뉴 */}
                <View style={{flex:1, backgroundColor:'#fff',paddingTop:10}}>
                    <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>

            {/* 하단 고정 로그아웃 버튼 */}
            <View style={styles.logoutContainer}>
                <Pressable onPress={()=>alert('로그아웃')}>
                    <Text style={styles.logoutText}>로그아웃</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    profileContainer:{
        padding:20,
        alignItems:"center",
    },
    profileImage:{
        width:80,
        height:80,
        borderRadius:40,
        marginBottom:10,
    },
    profileName:{
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
    },
    profileEmail:{
        color:"#fff",
        fontSize:14,
    },
    logoutContainer:{
        padding:20,
        borderTopWidth:1,
        borderTopColor:"#ccc",
    },
    logoutText:{
        fontSize:15,
        fontWeight:"bold",
        color:"#e53935",
    }

})

export { HomeScreen, ProfileScreen ,CustomDrower};